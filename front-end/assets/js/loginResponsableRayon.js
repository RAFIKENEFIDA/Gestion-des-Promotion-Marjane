import ResponsableRayon from "./classes/ResponsableRayon.js";

const email=document.getElementById("email");
const password=document.getElementById("password");

 
 document.getElementById("button-login-responsable-rayon").addEventListener('click',(e)=>{
    e.preventDefault();
    ResponsableRayon.loginResponsableRayon(email.value,password.value);
 })
