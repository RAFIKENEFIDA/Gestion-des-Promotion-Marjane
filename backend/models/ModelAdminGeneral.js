var db= require('../database');
module.exports={
  getAdminCentreByEmail: async function(req,res){

    var sql=`(SELECT * FROM admincentre WHERE email='${req.body.email}' )  `;
   var data= await  this.promise(sql);

   return data;

},
  getAdminGenralById: async function(id){

    var sql=`(SELECT * FROM admingeneral WHERE id='${id}' )  `;
   var data= await  this.promise(sql);

   return data;

},
  getAdminCentreByPrenom: async function(req,res){

    var sql=`(SELECT * FROM admincentre WHERE   prenom='${req.body.prenom}' )  `;
   var data= await  this.promise(sql);
   return data;

},

insertAdminCentre:async function(req,res,data){

    var sql=`INSERT INTO admincentre(nom, prenom, email, password,idcenter,role) VALUES ('${data.nom}','${data.prenom}','${data.email}','${data.password}','${data.idcenter}',"adminGenral")`;
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
}