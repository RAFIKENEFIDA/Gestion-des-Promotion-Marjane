var db=require('../database');
var ModelCentre=require('../models/ModelCentre');
module.exports= {
    getCentres: async function (req, res) { 
    var data=await ModelCentre.getCentres(req,res);
     res.status(200).send({
        data: data
      });
    },

    getCentreById:  function (req, res) {
        var id=req.params.id;
     return ModelCentre.getCentreById(req,res,id);
    },

    addCentre:  function (req, res) {
        var data=req.body;
     return ModelCentre.addCentre(req,res,data);
    },

    deleteCentre:  function (req, res) {
       var id=req.body.id;
     return ModelCentre.deleteCentre(req,res,id);
    },

    editCentre:  function (req, res) {
     var id=req.params.id;
     return ModelCentre.editCentre(req,res,id);
    },

    updateCentre:  function (req, res) {
        var data=req.body;
        return ModelCentre.updateCentre(req,res,data);
    },

  
}
