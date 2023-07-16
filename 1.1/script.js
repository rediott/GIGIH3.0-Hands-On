

function validate(){

const email = document.querySelector(".email-form").value
const pass = document.querySelector(".password-form").value
const stat = document.querySelector(".status")

const emailRegex =
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
 const isValidEmail = emailRegex.test(email);

 console.log(isValidEmail)
    //please add more label for more condition
   if(email.length<6 || pass.length < 6 || !isValidEmail){
    stat.innerHTML="Tidak valid"
   }else{
    stat.innerHTML="input Valid"
   }
}

