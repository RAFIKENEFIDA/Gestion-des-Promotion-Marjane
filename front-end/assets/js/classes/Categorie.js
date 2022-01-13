import port from "../../port.js";
import token from "../../token.js";

export default class Categorie  {

    static getAllCategories=async() =>{

        var Categories;

          try{
            const res = await fetch(port+"/view/categorie", {
              method: "GET",
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
              Categories=await res.json();
              console.log(Categories);
              return Categories.categories;
          } catch(error){
            console.log(error)
          }

        };

    };


