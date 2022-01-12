var db= require('../database');
module.exports={

  getResponsablesrayonByEmail: async function(req,res){

    var sql=`(SELECT * FROM responsablerayon WHERE email='${req.body.email}' )  `;
   var data= await  this.promise(sql);
   return data;

},

    getResponsablesrayons:function(req,res){
        var sql=`SELECT responsablerayon.nom as nom,responsablerayon.id as id,responsablerayon.prenom as prenom,responsablerayon.email as email,categorie.nom as categorie   FROM responsablerayon,categorie  WHERE responsablerayon.idcategorie =categorie.id   AND idAdminCentre ='${req.body.idAdminCentre}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ responsableRayons: data });
        });
    },


    getResponsablerayonById:function(req,res,id){
        var sql=`SELECT * FROM responsablerayon WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ Dataresponsablerayon: data });
        });
    },
   
    addResponsablerayon:async function(req,res,data) {
        var sql=`INSERT INTO responsablerayon (nom,prenom,email,password,idcategorie,role,idAdminCentre ) VALUES ('${data.nom}','${data.prenom}','${data.email}','${data.password}','${data.idcategorie}',"responsableRayon",'${data.idAdminCentre}')`;
        var data= await  this.promise(sql);
        res.send({ message: "responsable rayon was registered successfully!" });
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

    deleteResponsablerayon:function(req,res,id){
        var sql=`DELETE  FROM responsablerayon WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message:"l responsablerayon est bien supprimer" });
        });
    },
    editResponsablerayon:function(req,res,id){
        var sql=`SELECT * FROM responsablerayon WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({Dataresponsablerayon:data});
        });
    },

    updateResponsablerayon:function(req,res,data){
        var sql=`UPDATE  responsablerayon SET nom='${data.nom}',prenom='${data.prenom}',email='${data.email}',password='${data.password}',idcenter='${data.idcenter}'  WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"l responsablerayon bien modifier"});
        });
    },

}