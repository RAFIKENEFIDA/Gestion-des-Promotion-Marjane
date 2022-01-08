import port from "../../port.js";

export default class ResponsableRayon  {

    static loginResponsableRayon=async(email,password) =>{

      document.querySelector(".error-email").innerText ="";
      document.querySelector(".error-password").innerText ="";


        const data = {
            email: email,
            password: password,
          };
          console.log(data)
          try{

            const res = await fetch(port+"/authResponsableRayon", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            var data_user=await res.json();
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
            window.location.replace("../dashboard/responsableRayon.html");
            }
            console.log(data_user);
          } catch(error){
            console.log(error)
          }
      

        };

    };


