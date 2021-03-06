var db= require('../database');
module.exports={

  
  getProduits:function(req,res){
    var sql=`SELECT * FROM produit`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
      return  res.json({ produits: data });
    });
},


    getProduitByNom:async function (req,res,nom){
        var sql=`SELECT * FROM produit WHERE nom='${nom}'`;
        var data= await  this.promise(sql);
        return data;
    },

    getProduitById:async function (req,res,id){
      var sql=`SELECT * FROM produit WHERE id='${id}'`;
      var data= await  this.promise(sql);
      return data;
  },
  
    getProduitByCatgorie:async function (req,res,categorie){
        var sql=`SELECT produit.nom as nom,produit.quantite as quantite,produit.prix as prix,categorie.nom as categorie FROM produit,categorie WHERE categorie.id=produit.idcategorie AND categorie.nom='${categorie}'`;
        var data= await  this.promise(sql);
        res.send(data);
    },

    
    promise:  (query) => {
      return new Promise( (resolve, reject) => {
          db.query(query, function (err, result) {
              if (err) throw err;
              
              resolve(result);
          });
      });
  },
    
    addProduit:function(req,res,data){
        var sql=`INSERT INTO produit (nom,quantitestk,prix,idcategorie) VALUES ('${data.nom}','${data.quantitestk}',${data.prix},${data.idcategorie})`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message: "produit est bien ajouter" });
        });
    },


    deleteProduit:function(req,res,id){
        var sql=`DELETE  FROM produit WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message:"le produit est bien supprimer" });
        });
    },
    editProduit:function(req,res,id){
        var sql=`SELECT * FROM produit WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({produit:data});
        });
    },

    updateProduit:function(req,res,data){
        var sql=`UPDATE  produit SET nom='${data.nom}',quantitestk='${data.quantitestk}',prix=${data.prix},idcategorie=${data.idcategorie}  WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"produit bien modifier"});
        });
    },

}