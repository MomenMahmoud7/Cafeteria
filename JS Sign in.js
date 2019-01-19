let navigationBar = document.getElementById("navigation-bar");
let sticky = navigationBar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
};


let signinButton = document.getElementById("signin");

signinButton.addEventListener("click", function(){
  
  let emailSignin = document.getElementById("email-signin").value;
  let passwordSignin = document.getElementById("password-signin").value;
  console.log(emailSignin);
  
  let warningEmailSignin= document.getElementById("warning-email-signin");
  let warningPasswordSignin= document.getElementById("warning-password-signin");

  warningEmailSignin.innerHTML="";
  warningPasswordSignin.innerHTML="";


  if (emailSignin.length == 0){
    warningEmailSignin.innerText = "Insert your email address";
  }
  if (passwordSignin.length == 0){
    warningPasswordSignin.innerText = "Insert your password";
  }
});