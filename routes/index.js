// var express = require('express');
var ControllerCentre=require('../controllers/ControllerCentre');
var db=require('../database');
// var router = express.Router();

module.exports=(app)=>{
    app.get('/', ControllerCentre.getCentres);
    app.get('/view/:id', ControllerCentre.getCentreById);
    app.post('/addCentre', ControllerCentre.addCentre);
    app.delete('/deleteCentre/:id', ControllerCentre.deleteCentre);
    app.get('/editCentre/:id', ControllerCentre.editCentre);
    app.put('/edit/updateCentre', ControllerCentre.updateCentre);
    
};



