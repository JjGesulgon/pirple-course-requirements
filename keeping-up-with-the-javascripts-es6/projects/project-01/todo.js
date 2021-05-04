const db = [];
let currentUser = {};
const signUpComponent = document.getElementById("sign-up");
const loginComponent = document.getElementById("login");
const dashboardComponent = document.getElementById("dashboard");

document.getElementById("btn-signup").addEventListener("click",(e) => {
  e.preventDefault();
  resetForm();
  showRegistration();
});

document.getElementById("btn-login").addEventListener("click",(e) => {
  e.preventDefault();
  resetForm();
  showLogin();
});

document.getElementById("signUpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const termsAndConditions = document.querySelector("#termsAndConditions").checked;

  const fieldArray = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": password,
    "termsAndConditions": termsAndConditions
  };

  const signUpValidated = SignUpformValidation(fieldArray);
  const newUser = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": password
  }

  if(signUpValidated){
    hashPassword(newUser)
    // saveUser(newUser);
    // resetForm();
    goToDashboard();
  }
});

function goToDashboard(){
  dashboardComponent.classList.remove("hidden");  
  signUpComponent.classList.add("hidden");
  loginComponent.classList.add("hidden");

  
}

function hashPassword(userData){
  const hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
  hashObj.update(userData.password);

  const hash = hashObj.getHash("HEX");
  userData.password = hash;

  console.log(userData);
}

function login(user){
  localStorage.setItem('currentUser', JSON.stringify(user));
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

function saveUser(userData){
  db.push(userData);
  localStorage.setItem('db', JSON.stringify(db));
}

function SignUpformValidation(fields){
  let errMsg = null;

  for(let field in fields){
    const fieldName = field.replace(/([A-Z])/g, ' $1').trim()

    if(fields[field] === ""){
      errMsg = fieldName.toUpperCase() + " is a required field"
      errorMessage(errMsg);
      break;
    }
  }

  if(fields.hasOwnProperty('termsAndConditions') && errMsg === null){
    if(fields["termsAndConditions"] == false){
      errMsg = "Please check the TERMS AND CONDITIONS";
      errorMessage(errMsg);
    }
  }

  if(!errMsg){
    return true;
  }
  return false;
}

function errorMessage(err){
  document.getElementById("error-message").innerText = err;
}

function showRegistration(){
  loginComponent.classList.add("hidden");
  dashboardComponent.classList.add("hidden");
  if (signUpComponent.classList.contains("hidden")){
    signUpComponent.classList.remove("hidden");  
  }else{
    signUpComponent.classList.add("hidden");
  }
}

function showLogin(){
  signUpComponent.classList.add("hidden");
  dashboardComponent.classList.add("hidden");
  if (loginComponent.classList.contains("hidden")){
    loginComponent.classList.remove("hidden");  
  }else{
    loginComponent.classList.add("hidden");
  }
}

function resetForm(){
  document.getElementById("signUpForm").reset();
  document.getElementById("loginForm").reset();
}