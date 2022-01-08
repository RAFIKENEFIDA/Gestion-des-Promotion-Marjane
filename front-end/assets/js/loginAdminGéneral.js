import AdminGeneral from "./classes/AdminGeneral.js";

const email=document.getElementById("email");
const password=document.getElementById("password");

 document.getElementById("button-login-admin-general").addEventListener('click',async(e)=>{
    e.preventDefault();
   var data_user=  await AdminGeneral.loginAdminGeneral(email.value,password.value);
   console.log(data_user)

   if(data_user.accessToken===null){

    if(data_user.error=="email"){
      document.querySelector(".error-password").innerText ="";
      document.querySelector(".error-email").innerText ="Invalid Email";

    }else if (data_user.error=="password"){
      document.querySelector(".error-email").innerText ="";
      document.querySelector(".error-password").innerText ="Invalid Password";
    }

  }else{
   localStorage.setItem('token',data_user.accessToken );
  localStorage.setItem('data',JSON.stringify(data_user) );
  window.location.replace("../dashboard/adminGeneral.html");
  }
 })
