
import route from "../route/responsableRayon.js"
import ResponsableRayon from "../classes/ResponsableRayon.js"
import Promotion from "../classes/Promotion.js";
import Produit from "../classes/Produit.js";
import Categorie  from "../classes/Categorie.js";
import token from "../../token.js"
let dataAdminCentre;
let idcategorie;
if(token){
  dataAdminCentre=  JSON.parse(localStorage.getItem('data'));
 idcategorie=dataAdminCentre.idcategorie;

}


window.addEventListener('DOMContentLoaded', async() => {

    if(!token){
      window.location.href="../auth/loginResponsableRayon.html";
    }
  
    
      let content =route("acceuil");
      let idPromotion
      document.querySelector(".container-content").innerHTML=content;

      let Allpromotions= await Promotion.getPromotionsForResponsableRayon(idcategorie);

      document.querySelector(".tbody").innerHTML=Allpromotions.map(promotion=>
        `<tr>
            <td>${promotion.nom} </td>
            <td>${promotion.produit}</td>
            <td>${promotion.categorie}</td>
            <td>${promotion.status}</td>
            <td>${promotion.pourcentage} %</td>
            <td>${promotion.pointfidelite} %</td>
            <td>${promotion.quantite}</td>
            <td>${promotion.datefinpromo}</td>
            <td>
                <button type="button" data-type="${promotion.id}"  class="btn btn-primary viewPromo" data-toggle="modal" data-target="#modalValidPromotion">
                <i class="fas fa-eye"></i>
              </button>
            </td>
        </tr>`
          )



             document.querySelectorAll('.viewPromo').forEach(async(Element) =>{
            console.log(Element)
            Element.addEventListener('click', async ()=>{

              idPromotion=Element.getAttribute('data-type');
         
             }) 
             })


        document.querySelector('.updateStatusPromo').addEventListener('click', async ()=>{

       let selectPromo=document.getElementById("selectPromo");
      let commentaire=document.getElementById("commentairePromo");
      let dataPromo={
        id:idPromotion,
        commentaire:   commentaire.value ,
        status:selectPromo.value
      }
      console.log(dataPromo)

      const reponseupdate=  await Promotion.updatePromotionBtResponsable(dataPromo)

      Swal.fire({
        position: 'centre',
        icon: 'success',
        title: reponseupdate.message,
        showConfirmButton: false,
        timer: 1500
      })
      window.location.href="./ResponsableRayon.html";

        })      
        
  });


  document.querySelector(".logout").addEventListener("click",(e)=>{

    localStorage.setItem("token","");
    localStorage.setItem("data","");

    window.location.href="../auth/loginAdminGeneral.html";

  })