const signUpComponent = document.getElementById("sign-up")

document.getElementById("btn-signup").addEventListener("click",(e) => {
  e.preventDefault();
  showRegistration();
});

function showRegistration(){
  if (signUpComponent.classList.contains("hidden")){
    signUpComponent.classList.remove("hidden");  
  }else{
    signUpComponent.classList.add("hidden");
  }
}