import port from "../../port.js";


export default class AdminGeneral  {

    static loginAdminGeneral=async(email,password) =>{

      document.querySelector(".error-email").innerText ="";
      document.querySelector(".error-password").innerText ="";
      var data_user

        const data = {
            email: email,
            password: password,
          };
          console.log(data)
          try{

            const res = await fetch(port+"/authAdminGeneral", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            return  data_user=await res.json();
          } catch(error){
            console.log(error)
          }
      

        };

    };


