
import route from "../route/adminGeneral.js"
import Centre from "../classes/Centre.js"
import AdminCentre from "../classes/AdminCentre.js"
import token from "../../token.js"


const linkAcceuil= document.querySelector(".nav-item-acceuil");
const linkPromotion= document.querySelector(".nav-item-promotion");
const linkAddAdmin= document.querySelector(".nav-item-add-admin");

// function for get all admins centre

const getAllAdminsCentre=async()=>{

  let adminCentres= await AdminCentre.getAdminCentres();
  console.log(adminCentres[0]);


  document.querySelector(".tbody").innerHTML=adminCentres.map(adminCentre=>
`<tr>
    <td>${adminCentre.nom}</td>
    <td>${adminCentre.prenom}</td>
    <td>${adminCentre.email}</td>
    <td>${adminCentre.ville}</td>
    <td>
        <a href="#" class="delete" data-type="${adminCentre.id}"  data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    </td>
</tr>`
  )

 }

window.addEventListener('DOMContentLoaded', async() => {
  if(!token){

    window.location.href="../auth/loginAdminGeneral.html";

  }
    let content =route("acceuil");
    document.querySelector(".container-content").innerHTML=content;

   await getAllAdminsCentre();
       document.querySelectorAll('.delete').forEach(async(Element) =>{
        console.log(Element)
        Element.addEventListener('click', async ()=>{
          let response = await AdminCentre.deleteAdminCentre(Element.getAttribute('data-type'));

          getAllAdminsCentre();
          console.log(response);
             
        })
    })
       
});

// evenement pour supprimer un admin du centre

//  load  page promotion

  document.querySelector(".to-promotion").addEventListener("click",(e)=>{
    e.preventDefault();



    document.querySelector(".container-content").innerHTML="";
    let content =route("promotion");
    document.querySelector(".container-content").innerHTML=content;
  })

  // load page ajoute admin

  document.querySelector(".to-add-admin").addEventListener("click",async(e)=>{
    e.preventDefault();


    document.querySelector(".container-content").innerHTML="";
    let content =route("ajouteAdmin");
    document.querySelector(".container-content").innerHTML=content;
    let centres=await Centre.getAllCentre();
    console.log(centres);

 
     // Fonction qui ajoute l'admin centre

    document.querySelector("#button-ajoute-admin-centre").addEventListener("click",async()=>{
     
      let nom= document.getElementById("nom");
      let prenom= document.getElementById("prenom");
      let email= document.getElementById("email");
      let centre= document.getElementById("centre");
   
      let data_admin={
        nom:nom.value,
        prenom:prenom.value,
        email:email.value,
        ville:centre.value,
      }
   
       let response=await AdminCentre.addAdminCentre(data_admin);

       Swal.fire({
        position: 'centre',
        icon: 'success',
        title: response.message,
        showConfirmButton: false,
        timer: 3000
      })

       window.location.href = "./adminGeneral.html";
   
     })

  })

  // load page acceuil
  document.querySelector(".to-acceuil").addEventListener("click",(e)=>{
    e.preventDefault();

    document.querySelector(".container-content").innerHTML="";
    let content =route("acceuil");
    document.querySelector(".container-content").innerHTML=content;
    getAllAdminsCentre();

  })
  document.querySelector(".logout").addEventListener("click",(e)=>{

    localStorage.setItem("token","");
    localStorage.setItem("data","");

    window.location.href="../auth/loginAdminGeneral.html";

  })





 






    
