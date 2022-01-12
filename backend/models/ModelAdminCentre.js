var db= require('../database');
module.exports={

  getAdminCentreByEmail: async function(req,res){

    var sql=`(SELECT * FROM admincentre WHERE email='${req.body.email}' )  `;
   var data= await  this.promise(sql);

   return data;

},
  getAdminCentreByPrenom: async function(req,res){

    var sql=`(SELECT * FROM admincentre WHERE   prenom='${req.body.prenom}' )  `;
   var data= await  this.promise(sql);
   return data;

},

insertAdminCentre:async function(req,res,data){

    var sql=`INSERT INTO admincentre(nom, prenom, email, password,idcenter,role) VALUES ('${data.nom}','${data.prenom}','${data.email}','${data.password}','${data.idcentre}',"adminCentre")`;
    var data= await  this.promise(sql);
    res.send({ message: "admin centre was registered successfully!" });
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
    getAdminCentres:async function(req,res){
        var sql=`SELECT admincentre.id as id ,admincentre.nom as nom,admincentre.prenom as prenom,admincentre.email as email,centre.ville as ville   FROM admincentre,centre WHERE admincentre.idcenter=centre.id`;
        var data= await  this.promise(sql);

        res.send({ data: data });
    },


    getAdminCentreById:function(req,res,id){
        var sql=`SELECT * FROM admincentre WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ DataAdminCentre: data });
        });
    },


    deleteAdminCentre: async function (req,res,id){
        var sql=`DELETE  FROM admincentre WHERE id='${id}'`;
        var data= await  this.promise(sql);
        res.send({ data: data });
    },
    editAdminCentre:function(req,res,id){
        var sql=`SELECT * FROM admincentre WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({DataAdminCentre:data});
        });
    },

    updateAdminCentre:function(req,res,data){
        var sql=`UPDATE  admincentre SET nom='${data.nom}',prenom='${data.prenom}',email='${data.email}',password='${data.password}',idcenter='${data.idcenter}'  WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"l admincentre bien modifier"});
        });
    },

}