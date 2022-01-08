export default class AdminGeneral  {

    static loginAdminGeneral=async(email,password) =>{

        const data = {
            email: email,
            password: password,
          };
          console.log(data)
          try{

            const res = await fetch("http://localhost:3000/authAdminGeneral", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            var data_user=await res.json();
            if(data_user.accessToken===null){
          
               

            }

            localStorage.setItem('token',data_user.accessToken );
            localStorage.setItem('data',JSON.stringify(data_user) );


            console.log(data_user);
          } catch(error){
            console.log(error)
          }
      

        };

    };


