
import route from "../route/adminCentre.js"
import ResponsableRayon from "../classes/ResponsableRayon.js"
import token from "../../token.js"
let dataAdminCentre;
let idAdmin;
if(token){
  dataAdminCentre=  JSON.parse(localStorage.getItem('data'));
 idAdmin=dataAdminCentre.id;

}


// function for get all admins centre



window.addEventListener('DOMContentLoaded', async() => {

  if(!token){
    window.location.href="../auth/loginAdminCentre.html";

  }

  


    let content =route("acceuil");
    document.querySelector(".container-content").innerHTML=content;

    
       
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

  document.querySelector(".to-add-responsable").addEventListener("click",async(e)=>{
    e.preventDefault();


    document.querySelector(".container-content").innerHTML="";
    let content =route("ajouteResponsableRayon");
    document.querySelector(".container-content").innerHTML=content;
    // let centres=await Centre.getAllCentre();
    // console.log(centres);
     // Fonction qui ajoute l'admin centre

    document.querySelector("#button-ajoute-responsable-rayon").addEventListener("click",async()=>{
     
      let nom= document.getElementById("nom");
      let prenom= document.getElementById("prenom");
      let email= document.getElementById("email");
      let categorie= document.getElementById("categorie");
   
      let data_responsable_rayon={
        nom:nom.value,
        prenom:prenom.value,
        email:email.value,
        nomCategorie:categorie.value,
        idAdminCentre:idAdmin
      }
   
       let response=await ResponsableRayon.addResponsableRayon(data_responsable_rayon);

       Swal.fire({
        position: 'centre',
        icon: 'success',
        title: response.message,
        showConfirmButton: false,
        timer: 3000
      })
       window.location.href = "./adminCentre.html";
   
     })

  })

  // load page acceuil
  document.querySelector(".to-acceuil").addEventListener("click",(e)=>{
    e.preventDefault();

    document.querySelector(".container-content").innerHTML="";
    let content =route("acceuil");
    document.querySelector(".container-content").innerHTML=content;

  })
  // load page responsables rayon
  document.querySelector(".responsables-rayon").addEventListener("click",async (e)=>{
    e.preventDefault();

    document.querySelector(".container-content").innerHTML="";
    let content =  route("responsablesrayon");
    document.querySelector(".container-content").innerHTML=content;


const getAllResponsablesRayon=async()=>{

  let responsablesrayon= await ResponsableRayon.getResponsablesrayon(idAdmin);
  console.log(responsablesrayon);


  document.querySelector(".tbody").innerHTML=responsablesrayon.map(responsablerayon=>
`<tr>
    <td>${responsablerayon.nom}</td>
    <td>${responsablerayon.prenom}</td>
    <td>${responsablerayon.email}</td>
    <td>${responsablerayon.categorie}</td>
    <td>
        <a href="#" class="delete" data-type="${responsablerayon.id}"  data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    </td>
</tr>`
  )
}

await  getAllResponsablesRayon();

    document.querySelectorAll('.delete').forEach(async(Element) =>{
      console.log(Element)
      Element.addEventListener('click', async ()=>{
        let response = await ResponsableRayon.deleteResponsableRayon(Element.getAttribute('data-type'));

     await   getAllResponsablesRayon();
           
      })
  })

  })
   // load page ajoute promotion
   document.querySelector(".to-add-promotion").addEventListener("click",(e)=>{
    e.preventDefault();

    document.querySelector(".container-content").innerHTML="";
    let content =route("addPromotion");
    document.querySelector(".container-content").innerHTML=content;

  })

  // logout

  document.querySelector(".logout").addEventListener("click",(e)=>{
   console.log("kjhgf")

    localStorage.setItem("token","");
    localStorage.setItem("data","");

    window.location.href="../auth/loginAdminCentre.html";



  })




 






    
