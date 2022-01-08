var db=require('../database');
var adminCentreModel=require('../models/ModelAdminCentre');
var adminGeneralModel=require('../models/ModelAdminGeneral');
var responsablerayonModel=require('../models/ModelResponsablerayon')


checkComptAdminCentreExist=async(req, res, next)=>{

    var data= await adminCentreModel.getAdminCentreByEmail(req, res);
     console.log(data);
    if(data.length>0) {
     
         res.status(400).send({
        message: "Failed! email is already in use!"
      });
    }  else{
      next();

    }  
}

checkComptResponsableRayonExist=async(req, res, next)=>{

  var data= await responsablerayonModel.getResponsablesrayonByEmail(req, res);
   console.log(data);
  if(data.length>0) {
   
       res.status(400).send({
      message: "Failed! email is already in use!"
    });
  }  else{
    next();

  }  
}
// checkUserIsAdminGeneral=async(req, res, next)=>{

//   let token = res.token;

//   if (!token) {
//     return res.status(403).send({
//       message: "No token provided!"
//     });
//   }

//   jwt.verify(token, config.secret, (err, decoded) => {
    
//     var id = decoded.id;
//     var data=await adminGeneralModel.getAdminGenralById(id);
//     next();
//   });

        
// }


const verifySignUp = {
 
  checkComptAdminCentreExist: checkComptAdminCentreExist,
  checkComptResponsableRayonExist: checkComptResponsableRayonExist

};

module.exports = verifySignUp;