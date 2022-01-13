import port from "../../port.js";
import token from "../../token.js";

export default class Categorie  {

    static getProduitByCatgorie=async(param) =>{

        var produits;

          try{
            const res = await fetch(port+"/view/produit", {
              method: "POST",
              body: JSON.stringify({categorie:param}),
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
              produits=await res.json();
              return produits;
          } catch(error){
            console.log(error)
          }

        };

    };
