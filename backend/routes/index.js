// var express = require('express');
var ControllerCentre=require('../controllers/ControllerCentre');
var ControllerAdminCentre=require('../controllers/ControllerAdminCentre');
var ControllerCategorie=require('../controllers/ControllerCategorie');
var ControllerProduit=require('../controllers/ControllerProduit');
var ControllerResponsablerayon=require('../controllers/ControllerResponsablerayon');
var ControllerPromotion=require('../controllers/ControllerPromotion');

var ControllerAuth=require('../controllers/authController');
const  verifySignUp  = require("../middleware/verifySignUp");
const  Auth  = require("../middleware/authJwt");

var db=require('../database');

// var router = express.Router();

module.exports=(app)=>{
      // route inscription admin general
    app.post('/admingeneral/signup', ControllerAuth.signup);
    //authentication admin general
    app.post('/authAdminGeneral', ControllerAuth.signinAdminGeneral);
    // authentification admin centre
    app.post('/authAdminCentre', ControllerAuth.signinAdminCentre);
    // authentification responsable rayon
    app.post('/authResponsableRayon', ControllerAuth.signinResponsableRayon);
    // cheker si authentifier
    app.post('/checkAuth', ControllerAuth.checkIfAuth);


    //routes centre
    app.get('/view/centre',Auth.verifyToken, ControllerCentre.getCentres);
    app.get('/view/centre/:id',Auth.verifyToken, ControllerCentre.getCentreById);
    app.post('/view/addcentre', Auth.verifyToken,ControllerCentre.addCentre);
    app.delete('/view/deletecentre', Auth.verifyToken,ControllerCentre.deleteCentre);
    app.get('/view/editcentre/:id', Auth.verifyToken,ControllerCentre.editCentre);
    app.put('/view/updatecentre',Auth.verifyToken, ControllerCentre.updateCentre);

    //routes admin centre
    app.get('/view/admincentre',Auth.verifyToken,ControllerAdminCentre.getAdminCentres);
    app.get('/view/admincentre/:id',Auth.verifyToken,ControllerAdminCentre.getAdminCentreById);
    app.post('/view/addadmincentre',Auth.verifyToken,verifySignUp.checkComptAdminCentreExist,ControllerAdminCentre.addAdminCentre);
    app.delete('/view/deleteadmincentre',Auth.verifyToken,ControllerAdminCentre.deleteAdminCentre);
    app.get('/view/editadmincentre/:id',Auth.verifyToken,ControllerAdminCentre.editAdminCentre);
    app.put('/view/edit/updateadmincentre',Auth.verifyToken,ControllerAdminCentre.updateAdminCentre);

     //routes Responsablerayon
     app.post('/view/responsablesrayon',Auth.verifyToken,ControllerResponsablerayon.getResponsablesrayons);
     app.get('/view/responsablerayon/:id',Auth.verifyToken,ControllerResponsablerayon.getResponsablerayonById);
     app.post('/view/addresponsablerayon',Auth.verifyToken,verifySignUp.checkComptResponsableRayonExist,ControllerResponsablerayon.addResponsablerayon);
     app.delete('/view/responsablerayon',Auth.verifyToken,ControllerResponsablerayon.deleteResponsablerayon);
     app.get('/view/responsablerayon/:id',Auth.verifyToken,ControllerResponsablerayon.editResponsablerayon);
     app.put('/view/edit/responsablerayon',Auth.verifyToken,ControllerResponsablerayon.updateResponsablerayon);

    //routes categorie
    app.get('/view/categorie',Auth.verifyToken,ControllerCategorie.getCategories);
    app.get('/view/categorie/:id',Auth.verifyToken,ControllerCategorie.getCategorieById);
    app.post('/view/addcategorie',Auth.verifyToken,ControllerCategorie.addCategorie);
    app.delete('/view/deletecategorie',Auth.verifyToken,ControllerCategorie.deleteCategorie);
    app.get('/view/editcategorie/:id',Auth.verifyToken,ControllerCategorie.editCategorie);
    app.put('/view/updatecategorie',Auth.verifyToken,ControllerCategorie.updateCategorie);

    //routes produit
    app.get('/view/produit',Auth.verifyToken,ControllerProduit.getProduits);
    app.get('/view/produit/:id',Auth.verifyToken,ControllerProduit.getProduitById);
    app.post('/view/produit',Auth.verifyToken,ControllerProduit.getProduitByCatgorie);
    app.post('/view/addproduit',Auth.verifyToken,ControllerProduit.addProduit);
    app.delete('/view/deleteproduit',Auth.verifyToken,ControllerProduit.deleteProduit);
    app.get('/view/editproduit/:id',Auth.verifyToken,ControllerProduit.editProduit);
    app.put('/view/updateproduit',Auth.verifyToken,ControllerProduit.updateProduit);

    //routes promotion
    app.post('/view/promotion',Auth.verifyToken,ControllerPromotion.getPromotions);
    app.get('/view/promotion/adminCentre',Auth.verifyToken,ControllerPromotion.getPromotionsForAdminCentre);
    app.get('/view/promotion/:id',Auth.verifyToken,ControllerPromotion.getPromotionById);
    app.post('/view/addpromotion',Auth.verifyToken,ControllerPromotion.addPromotion);
    app.delete('/view/deletepromotion',Auth.verifyToken,ControllerPromotion.deletePromotion);
    app.get('/view/editpromotion/:id',Auth.verifyToken,ControllerPromotion.editPromotion);
    app.put('/view/updatepromotion',Auth.verifyToken,ControllerPromotion.updatePromotion);
    app.put('/view/updatestatuspromotion',Auth.verifyToken,ControllerPromotion.updateStatusPromotion);
    
};



