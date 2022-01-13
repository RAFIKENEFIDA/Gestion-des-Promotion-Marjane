var db= require('../database');
var produit=require('../models/ModelProduit');
var categorie =require('../models/ModelCategorie');
var fs = require('fs');

module.exports={

  getPromotionsForAdminCentre:async function(req,res){
   
    var sql=`SELECT  produit.nom as produit, produit.quantite as quantite,promotion.nom as nom,promotion.pourcentage as pourcentage,promotion.pointfidelite as pointfidelite,promotion.datefinpromo as datefinpromo,promotion.commentaire as commentaire,promotion.status as status,categorie.nom as categorie FROM promotion,categorie,produit  WHERE promotion.idproduit=produit.id AND produit.idcategorie=categorie.id`;
    var data= await  this.promise(sql);
    return data;

  },

    getPromotions:async function(req,res,idcategorie){


        var sql=`SELECT  produit.nom as produit, produit.quantite as quantite,promotion.nom as nom,promotion.id as id,promotion.pourcentage as pourcentage,promotion.pointfidelite as pointfidelite,promotion.datefinpromo as datefinpromo,promotion.commentaire as commentaire,promotion.status as status,promotion.heure as heure,categorie.nom as categorie FROM promotion,categorie,produit  WHERE promotion.idproduit=produit.id AND produit.idcategorie=categorie.id AND produit.idcategorie='${idcategorie}' AND promotion.status="encore" `;
        var data= await  this.promise(sql);
        return data;
    
    },

  promise:  (query) => {
    return new Promise( (resolve, reject) => {
        db.query(query, function (err, result) {
            if (err) throw err;
            
            resolve(result);
        });
    });
},

    getPromotionById:function(req,res,id){
        var sql=`SELECT * FROM promotion WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ Promotion: data });
        });
    },
    
    addPromotion:async(req,res,data)=>{
            var sql=`INSERT INTO promotion (nom,pourcentage,pointfidelite,datedebutpromo,datefinpromo,heure,commentaire,status,idproduit,expiration) VALUES ('${data.nom}',${data.pourcentage},${data.pointfidelite},'${data.datedebutpromo}','${data.datefinpromo}','${data.heure}','aucun','encore','${data.idproduit}','${data.expiration}')`;
            db.query(sql, function (err, data, fields) {
                if (err) throw err;
              return  res.json({ message: "promotion est bien ajouter",  error: false});
            });
    },

    deletePromotion:function(req,res,id){
        var sql=`DELETE  FROM promotion WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message:"la  promotion est bien supprimer" });
        });
    },
    editPromotion:function(req,res,id){
        var sql=`SELECT * FROM promotion WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({Promotion:data});
        });
    },

    updatePromotion:function(req,res,data){
        var sql=`UPDATE  promotion SET nom='${data.nom}',pourcentage='${data.pourcentage}',pointfidelite=${data.pointfidelite},datedebutpromo=${data.datedebutpromo},datefinpromo=${data.datefinpromo},heure=${data.heure},commentaire=${data.commentaire},status=${data.status},idproduit=${data.idproduit}   WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"promotion bien modifier"});
        });
    },
    updateStatusPromotion:function(req,res,data){
        let status= data.status;
        let commentaire=data.commentaire;
        let id=data.id;
        var sql=`UPDATE  promotion SET commentaire='${data.commentaire}',status='${data.status}'  WHERE id=${data.id}`;
        let date = new Date();
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        var heure=date.getHours();
        var minutes=date.getMinutes();
        var heures=heure+":"+minutes;
        newdate = year + "-" + month + "-" + day;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            fs.appendFileSync("journalisation.txt", `==> chef de rayon a changer le status de la promo à: ${status}  et  le commentaire :${commentaire}  action : update idpromotion:${id}  le: ${newdate}  heures:${heures}\n`, "UTF-8",{'flags': 'a+'});

            var sql=`insert into journalisation(idpromotion,idresponsable,date,heures,statusnouveau,commentairenouveau,action) VALUES (${id},1,'${newdate}','${heures}','${status}','${commentaire}','update')`;
            db.query(sql, function (err, data, fields) {
                  if (err) throw err;
            });
            
          return  res.json({message:"Status et commentaire  promotion bien modifier"});
        });
    },

}