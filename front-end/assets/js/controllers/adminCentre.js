
import route from "../route/adminCentre.js"
import ResponsableRayon from "../classes/ResponsableRayon.js"
import Promotion from "../classes/Promotion.js";
import Produit from "../classes/Produit.js";
import Categorie  from "../classes/Categorie.js";
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

  document.querySelector(".to-promotion").addEventListener("click", async (e)=>{
    e.preventDefault();



    document.querySelector(".container-content").innerHTML="";
    let content =route("promotion");
    document.querySelector(".container-content").innerHTML=content;
    

    let Allpromotions= await Promotion.getPromotions();

    document.querySelector(".tbody").innerHTML=Allpromotions.map(promotion=>
      `<tr>
          <td>${promotion.nom}</td>
          <td>${promotion.produit}</td>
          <td>${promotion.categorie}</td>
          <td>${promotion.status}</td>
          <td>${promotion.pourcentage}</td>
          <td>${promotion.pointfidelite}</td>
          <td>${promotion.commentaire}</td>
          <td>${promotion.quantite}</td>
          <td>${promotion.datefinpromo}</td>
          <td>
              <a href="#" class="delete" data-type="${promotion.id}"  data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
          </td>
      </tr>`
        )



  })

  // load page ajoute admin

  document.querySelector(".to-add-responsable").addEventListener("click",async(e)=>{
    e.preventDefault();


    document.querySelector(".container-content").innerHTML="";
    let content =route("ajouteResponsableRayon");
    document.querySelector(".container-content").innerHTML=content;

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
   document.querySelector(".to-add-promotion").addEventListener("click", async(e)=>{
    e.preventDefault();

    document.querySelector(".container-content").innerHTML="";
    let content =  route("addPromotion");
    document.querySelector(".container-content").innerHTML=content;

    let categories=await Categorie.getAllCategories();
    console.log(categories);

    document.getElementById("categorieProduit").innerHTML=categories.map(categorie=>
         `
         <option value=${categorie.nom}>${categorie.nom}</option>
            
         `
    )


    document.getElementById("categorieProduit").addEventListener("change",async()=>{

      console.log("click")

      let option=document.getElementById("categorieProduit").value;

      let produits=await Produit.getProduitByCatgorie(option);

      console.log(option)


      document.getElementById("produit").innerHTML=produits.map(produit=>
        `
        <option value=${produit.nom}>${produit.nom}</option>
           
        `)
    })


     //  ajoute une promotion

  document.getElementById("button-ajoute-promotion").addEventListener("click",async (e)=>{
     
    const nomPromotion=document.getElementById("nomPromotion");
    const produit=document.getElementById("produit");
    const expiration=document.getElementById("expiration");
    const pourcentage=document.getElementById("pourcentagePromo");
    const pointsFidilite=document.getElementById("pourcentagePointsFidilite");
     
    
    const dataPromo={
      nom: nomPromotion.value,
      produit: produit.value,
      pourcentage: pourcentage.value,
      pointfidelite: pointsFidilite.value,
      expiration: expiration.value,
 };
       
    let response = await Promotion.addPromotion(dataPromo);
    console.log(response);

      if(response.error==true) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: response.message
        })
      }

      else {

        Swal.fire({
          position: 'centre',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2500
        })

        window.location.href = "./adminCentre.html";

      }
    console.log(response)
          
  })

  })

 

  // logout

  document.querySelector(".logout").addEventListener("click",(e)=>{
   console.log("kjhgf")

    localStorage.setItem("token","");
    localStorage.setItem("data","");

    window.location.href="../auth/loginAdminCentre.html";



  })




 






    
