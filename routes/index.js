// var express = require('express');
var ControllerCentre=require('../controllers/ControllerCentre');
var ControllerAuth=require('../controllers/authController');
var ControllerAdminGeneral=require('../controllers/controllerAdminGeneral');
const  verifySignUp  = require("../middleware/verifySignUp");
var db=require('../database');

module.exports=(app)=>{
   // route inscription admin general
    app.post('/adminGeneral/signup', ControllerAuth.signup);
    //  route ajoute compt admin centre
    app.post('/view/addAdminCentre',verifySignUp.checkComptAdminCentreExist, ControllerAdminGeneral.addAdminCentre);
    //  route pour l'authentification
    app.post('/auth', ControllerAuth.signin);
    // routes centre
    app.get('/', ControllerCentre.getCentres);
    app.get('/view/:id', ControllerCentre.getCentreById);
    app.post('/addCentre', ControllerCentre.addCentre);
    app.delete('/deleteCentre/:id', ControllerCentre.deleteCentre);
    app.get('/editCentre/:id', ControllerCentre.editCentre);
    app.put('/edit/updateCentre', ControllerCentre.updateCentre);
};



