let navigationBar = document.getElementById("navigation-bar");
let sticky = navigationBar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
};

let signupButton = document.getElementById("signup");

signupButton.addEventListener("click", function(){

  let userName = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("confirm-email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  
  let warningName= document.getElementById("warning-name");
  let warningMobile= document.getElementById("warning-mobile");
  let warningEmail= document.getElementById("warning-email");
  let warningConfirmEmail= document.getElementById("warning-confirm-email");
  let warningPassword= document.getElementById("warning-password");
  let warningConfirmPassword= document.getElementById("warning-confirm-password");

  warningName.innerHTML="";
  warningMobile.innerHTML="";
  warningEmail.innerHTML="";
  warningConfirmEmail.innerHTML="";
  warningPassword.innerHTML="";
  warningConfirmPassword.innerHTML="";

  if (userName.length == 0){
    warningName.innerText = "Name is required";
  }
  if (mobile.length == 0){
    warningMobile.innerText = "Number is required";
  }
  else if (! (/^\d{11}$/.test(mobile))){
    warningMobile.innerText = "Invalid mobile number";
  }
  if (email.length == 0){
    warningEmail.innerText = "Email address is required";
  }
  else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    warningEmail.innerText = "Invalid email address";
  }
  if (email !== confirmEmail){
    warningConfirmEmail.innerText = "Unmatched email address";
  }
  if (password.length == 0){
    warningPassword.innerText = "Password is required";
  }
  else if ((/^\d{9}$/.test(password))){
    warningPassword.innerText = "Password must be at least 9 characters";
  }
  if (password !== confirmPassword){
    warningConfirmPassword.innerText = "Unmatched password";
  }
});

