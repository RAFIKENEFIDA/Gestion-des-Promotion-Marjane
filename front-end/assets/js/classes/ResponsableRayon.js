import port from "../../port.js";
import token from "../../token.js";

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

        static getResponsablesrayon=async(id) =>{

          const data = {
            idAdminCentre: id,
          };
      
          try{
            const res = await fetch(port+"/view/responsablesrayon", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { 
                "Content-Type": "application/json",
                 "x-access-token":token
              },
            });
            let responsablesRayon=await res.json();
      
            console.log(responsablesRayon);
            return responsablesRayon.responsableRayons;
          } catch(error){
            console.log(error)
          }
      
        };
     static deleteResponsableRayon=async(id) =>{
      const data = {
        id: id,
      };
    
          try{
            const res = await fetch(port+"/view/responsablerayon", {
              method: "DELETE",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json",
              "x-access-token":token },
            });
            let response=await res.json();
                return response.data;
          } catch(error){
            console.log(error)
          }
      
         };
        static addResponsableRayon=async(data_user) =>{

      
    
            const data = {
              nom:data_user.nom,
              prenom:data_user.prenom,
              email: data_user.email,
              nomCategorie: data_user.nomCategorie,
              idAdminCentre:data_user.idAdminCentre,
              };
              console.log(data)
              try{
    
                const res = await fetch(port+"/view/addresponsablerayon", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                     "Content-Type": "application/json",
                     "x-access-token":token },
                });
                return await res.json();
              } catch(error){
                console.log(error)
              }
          
    
            };

    };


