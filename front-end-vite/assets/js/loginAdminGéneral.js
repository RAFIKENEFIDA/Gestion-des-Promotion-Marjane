import AdminGeneral from "./classes/AdminGeneral.js";

const email=document.getElementById("email");
const password=document.getElementById("password");
// console.log(email,password);
 
 document.getElementById("button-login-admin-general").addEventListener('click',(e)=>{
    e.preventDefault();
     AdminGeneral.loginAdminGeneral(email.value,password.value);
 })
