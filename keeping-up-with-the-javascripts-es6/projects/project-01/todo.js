let db = [];
let currentUser = {};

const dashboardComponent = document.getElementById("dashboard");
const signUpComponent = document.getElementById("signup");
const signUpBtnComponent = document.getElementById("btn-signup");
const loginBtnComponent = document.getElementById("btn-login");
const loginComponent = document.getElementById("login");
const logoutComponent = document.getElementById("btn-logout");
const dashboardBtnComponent = document.getElementById("btn-dashboard");
const accountSettingsComponent = document.getElementById("btn-account-settings");
const createListComponent = document.getElementById("createList");

let newUser = {};
let errMsg = null;

let newTask = {
  name: "New Task",
  tasks: [],
}

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
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    termsAndConditions: termsAndConditions
  };
  
  const signUpValidated = SignUpformValidation(fieldArray);
  newUser = {
    user:{
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    },
    todo:[]
  }

  if(signUpValidated){
    newUser.user.password = hashPassword(newUser.user.password);
    saveUser(newUser);
    login(newUser);
    resetForm();
    goToDashboard();
  }
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#emailLogin").value;
  const password = hashPassword(document.querySelector("#passwordLogin").value);

  for(record of db){
    if(record.user.email === email && record.user.password === password){
      login(record);
      resetForm();
      goToDashboard();
      break;
    }
  }
});

document.getElementById("btnCreateTodoList").addEventListener("click", (e) => {
  e.preventDefault();
  createListComponent.classList.remove("hidden");  
  dashboardComponent.classList.add("hidden");
});

document.getElementById("btn-dashboard").addEventListener("click", (e) => {
  e.preventDefault();
  createListComponent.classList.add("hidden");  
  dashboardComponent.classList.remove("hidden");
});

document.getElementById("btn-logout").addEventListener("click", (e) => {
  e.preventDefault;
  logout();
});

document.getElementById("btn-change-list-name").addEventListener("click", (e) => {
  e.preventDefault;
  document.getElementById("finalTaskTitle").classList.add("hidden");
  document.getElementById("ChangeTaskTitle").classList.remove("hidden");
});

document.getElementById("btn-cancel-change").addEventListener("click", (e) => {
  e.preventDefault;
  document.getElementById("finalTaskTitle").classList.remove("hidden");
  document.getElementById("ChangeTaskTitle").classList.add("hidden");
});

document.getElementById("textbox-taskItem").addEventListener("keypress", (e) => {
  // e.preventDefault();

  if (e.key === "Enter"){
    let item = {
      taskName: document.getElementById("textbox-taskItem").value,
      isDone: false
    }
    newTask.tasks.push(item);

    console.log(newTask.tasks[0]);
    let ul = document.getElementById("list-id");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.taskName));
    
    ul.insertBefore(li, ul.childNodes[0]);

    document.getElementById("textbox-taskItem").value = "";
    item = {};

    /*
    * Todo: Push to task list to current user & push to database;
    */
  }
});


function goToDashboard(){  
  //console.log("test");
  signUpBtnComponent.classList.add("hidden");
  loginBtnComponent.classList.add("hidden");
  signUpComponent.classList.add("hidden");
  loginComponent.classList.add("hidden");
  dashboardComponent.classList.remove("hidden");
  dashboardBtnComponent.classList.remove("hidden");
  accountSettingsComponent.classList.remove("hidden");
  logoutComponent.classList.remove("hidden");

  document.getElementById("user-intro").classList.remove("hidden");
}

function hashPassword(password){
  const hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
  hashObj.update(password);
  
  const hash = hashObj.getHash("HEX");
  return hash;
}

function login(user){
  localStorage.setItem('currentUser', JSON.stringify(user));
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

function logout(){
  signUpBtnComponent.classList.remove("hidden");
  loginBtnComponent.classList.remove("hidden");
  loginComponent.classList.remove("hidden");
  dashboardComponent.classList.add("hidden");
  dashboardBtnComponent.classList.add("hidden");
  accountSettingsComponent.classList.add("hidden");
  logoutComponent.classList.add("hidden");
  createListComponent.classList.add("hidden");

  document.getElementById("user-intro").classList.add("hidden");
  currentUser = {};
  localStorage.removeItem('currentUser');
}

function saveUser(userData){
  db.push(userData);
  localStorage.setItem('db', JSON.stringify(db));
}

function SignUpformValidation(fields){
  errMsg = null;
  for(let field in fields){
    const fieldName = field.replace(/([A-Z])/g, ' $1').trim()

    if(fields[field] === ""){
      errMsg = fieldName.toUpperCase() + " is a required field"
      errorMessage(errMsg);
      break;
    }
  }

  for(el in db){
    if(db[el].user.email === fields.email){
      errMsg = fields.email + " already exist";
      errorMessage(errMsg);
      break;
    }
  }

  if(fields.hasOwnProperty('termsAndConditions')){
    if(fields["termsAndConditions"] === false){
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
  errMsg = null;
  document.getElementById("error-message").innerText = "";

}

function init(){
  if(JSON.parse(localStorage.getItem("db")) !== null){
    db = JSON.parse(localStorage.getItem("db"))
  }

  if(JSON.parse(localStorage.getItem("currentUser")) !== null){
    currentUser = JSON.parse(localStorage.getItem("currentUser"))
    document.getElementById("currentUserFirstname").innerText = currentUser.user.firstName;
    document.getElementById("currentUserLastname").innerText = currentUser.user.lastName;
    goToDashboard();
  }else{
    document.getElementById("user-intro").classList.add("hidden");
  }
}