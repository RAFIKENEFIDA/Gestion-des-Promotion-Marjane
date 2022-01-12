import AdminCentre from "../classes/AdminCentre.js";

const email=document.getElementById("email");
const password=document.getElementById("password");

 
 document.getElementById("button-login-admin-centre").addEventListener('click',(e)=>{
    e.preventDefault();
    AdminCentre.loginAdminCentre(email.value,password.value);
 })
