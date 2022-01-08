import port from "../../port.js";


export default class AdminCentre  {

    static loginAdminCentre=async(email,password) =>{

      document.querySelector(".error-email").innerText ="";
      document.querySelector(".error-password").innerText ="";


        const data = {
            email: email,
            password: password,
          };
          console.log(data)
          try{

            const res = await fetch(port+"/authAdminCentre", {
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
            window.location.replace("../dashboard/adminCentre.html");
            }
            console.log(data_user);
          } catch(error){
            console.log(error)
          }
      

        };
    static getAdminCentres=async() =>{
    
          try{
            const res = await fetch(port+"/view/admincentre", {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            let adminCentres=await res.json();
      
            console.log(adminCentres);
            return adminCentres.data;
          } catch(error){
            console.log(error)
          }
      
        };
     static deleteAdminCentre=async(id) =>{
      const data = {
        id: id,
      };
    
          try{
            const res = await fetch(port+"/view/deletecentre", {
              method: "DELETE",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            let response=await res.json();
    
            console.log(response);
            return response.data;
          } catch(error){
            console.log(error)
          }
      
         };
        static addAdminCentre=async(data_user) =>{

      
    
            const data = {
              nom:data_user.nom,
              prenom:data_user.prenom,
              email: data_user.email,
              ville: data_user.ville,
              };
              console.log(data)
              try{
    
                const res = await fetch(port+"/view/addadmincentre", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: { "Content-Type": "application/json" },
                });
                return await res.json();
              } catch(error){
                console.log(error)
              }
          
    
            };

    };


