var db=require('../database');
const config = require("../config/auth.config");
var adminGeneralModel=require('../models/ModelAdminGeneral');
const nodemailer = require('nodemailer');



var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.addAdminCentre =  (req, res) => {
    // Save User to Database
     var data=req.body;
     var generatPassword=Math.random().toString(36).substr(2) + req.body.prenom.split("@", 1);
     var password = bcrypt.hashSync(generatPassword, 8)
     data.password=password;

     var result=  adminGeneralModel.insertAdminCentre(req,res,data);
     if(result){
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'testcoding975@gmail.com',
            pass: 'testCoding1998'
          }
        });    
        var mailOptions = {
          from: 'testcoding975@gmail.com',
          to: 'rafikcoding@gmail.com',
          subject: 'Voila votre nouveau compte, avec le password',
          text:'Votre password est : '+  generatPassword
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (err) {
                return log('Error occurs');
            }
        });
     }

     return result

  };
