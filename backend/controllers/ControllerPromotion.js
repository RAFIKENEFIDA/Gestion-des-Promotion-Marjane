var db=require('../database');
var ModelPromotion=require('../models/ModelPromotion');
var produit=require('../models/ModelProduit');
var categorie =require('../models/ModelCategorie');

module.exports= {
    getPromotionsForAdminCentre:async function (req, res) {

     let data= await ModelPromotion.getPromotionsForAdminCentre();

   res.send({data:data})
    },
    getPromotions: async function (req, res) {

        let date = new Date();
        let month = date.getUTCMonth() + 1; 
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();

        let hours = String(date.getHours()).padStart(2, "0");
        let minutes = String(date.getMinutes()).padStart(2, "0");
        let seconds = String(date.getSeconds()).padStart(2, "0");
        // let minute = date.getMinutes;
        newdate = day + "-" + month + "-" + year;
        dayDate=hours + "-" + minutes + "-" + seconds;

        let idcategorie=req.body.idcategorie
        let data=await ModelPromotion.getPromotions(req,res,idcategorie);

        let arraydata=[];
        console.log(data);
        // console.log(data);
        data.forEach(element => {
            if(element.datefinpromo>=newdate )
            {
                console.log(element)
                arraydata.push(element);
            }
            else if(element.datefinpromo==newdate &&  dayDate>element.heure){
                console.log(element)
                arraydata.push(element);
            }
        });

        // console.log(minute)
        return res.json({data:arraydata});
    },

    getPromotionById:  function (req, res) {
        var id=req.params.id;
     return ModelPromotion.getPromotionById(req,res,id);
    },

    addPromotion: async function (req, res) {

        var data=req.body;
        var produitt=  await produit.getProduitByNom(req,res,data.produit);
        console.log(data)
        console.log(produitt)
        var categoriee=await categorie.getCategorieById(req,res,produitt[0].idcategorie);

        let today = new Date();

        let hours = String(today.getHours()).padStart(2, "0");
        let minutes = String(today.getMinutes()).padStart(2, "0");
        let seconds = String(today.getSeconds()).padStart(2, "0");

        let year=String(today.getFullYear());
        let month=String(today.getMonth()+1).padStart(2, "0");
        let day=String(today.getDate()).padStart(2, "0");

        let Today=day+'-'+month+'-'+year;
        let dateHeurs=hours+'-'+minutes+'-'+seconds;

         
        data.datedebutpromo=Today;
        today.setDate(today.getDate() +JSON.parse(data.expiration) );

         year=String(today.getFullYear());
         month=String(today.getMonth()+1).padStart(2, "0");
         day=String(today.getDate()).padStart(2, "0");

        Today=day+'-'+month+'-'+year
   
        data.datefinpromo=Today;
        data.heure=dateHeurs;
        data.idproduit=produitt[0].id;


        if(produitt[0].prix<50 && data.pourcentage>0 && data.pointfidelite>0 ){
           
         res.send({message:"le produit n'accept aucun promotion et points de fidélité",error:true});

        }
        
        else  if(categoriee[0].nom=="multimedia" && data.pourcentage>50  ) {

            res.send({message:"le pourcentage de la promotion pour le produit doit ne depasse pas 50 %",error:true})
    
           }
        else  if( categoriee[0].nom!="multimedia" && data.pourcentage>20 ) {

            res.send({message:"le pourcentage de la promotion pour le produit doit ne depasse pas 20 %",error:true})
    
           }
        else  if(categoriee[0].nom=="multimedia" && data.pointfidelite>50  || categoriee[0].nom!="multimedia" && data.pointfidelite>5 ) {

            res.send({message:"les points de fidélité de la promotion pour le produit doit ne depasse pas 5 %",error:true})

           }
           else{
             ModelPromotion.addPromotion(req,res,data);


           }


        



    
    },

    deletePromotion:  function (req, res) {
       var id=req.body.id;
     return ModelPromotion.deletePromotion(req,res,id);
    },

    editPromotion:  function (req, res) {
     var id=req.params.id;
     return ModelPromotion.editPromotion(req,res,id);
    },

    updatePromotion:  function (req, res) {
        var data=req.body;
        return ModelPromotion.updatePromotion(req,res,data);
    },

    updateStatusPromotion:  function (req, res) {
        let date = new Date();
        let hours = date.getHours();
        if(hours>=8 && hours<= 17){
        var data=req.body;
        return ModelPromotion.updateStatusPromotion(req,res,data);
        }else{
            return res.json({ message: "error fin temps" });
        }
        
    },

  
}
