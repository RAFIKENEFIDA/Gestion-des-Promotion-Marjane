import port from "../../port.js";
import token from "../../token.js";
export default class Promotion{

    static addPromotion=async (data)=>{

        const data_promotion = {
            nom: data.nom,
            produit: data.produit,
            pourcentage: data.pourcentage,
            pointfidelite: data.pointfidelite,
            expiration: data.expiration,
          };
          console.log(data)
          try{

            const res = await fetch(port+"/view/addpromotion", {
              method: "POST",
              body: JSON.stringify(data_promotion),
              headers: { "Content-Type": "application/json","x-access-token":token },
              
              
            });
            let response = await res.json();
           return response;
          } catch(error){
            console.log(error)
          }
      
    }

    static getPromotions=async() =>{

        var Promotions;

          try{
            const res = await fetch(port+"/view/promotion/adminCentre", {
              method: "GET",
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
              Promotions=await res.json();
              console.log(Promotions);
              return Promotions.data;
          } catch(error){
            console.log(error)
          }

        };
    static getPromotionsForResponsableRayon=async(idcategorie) =>{

        let Promotions;
        const data={
          idcategorie:idcategorie
        };

          try{
            const res = await fetch(port+"/view/promotion", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
              Promotions=await res.json();
              console.log(Promotions);
              return Promotions.data;
          } catch(error){
            console.log(error)
          }

        };

    static updatePromotionBtResponsable=async(dataPromo) =>{



        
        const data={
          commentaire:dataPromo.commentaire,
          status:dataPromo.status,
          id:dataPromo.id,
        };

          try{
            const res = await fetch(port+"/view/updatestatuspromotion", {
              method: "PUT",
              body: JSON.stringify(data),
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
             let response=await res.json();
              console.log(response);
              return response;
          } catch(error){
            console.log(error)
          }

        };
}