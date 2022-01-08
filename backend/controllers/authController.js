var db=require('../database');
const config = require("../config/auth.config");
var authModel=require('../models/ModelAuth');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  // Save User to Database
   var data=req.body;
   var password = bcrypt.hashSync(data.password, 8)
   data.password=password;
   return authModel.insertAdminGeneral(req,res,data);
};

exports.signinAdminGeneral = async (req, res) => {


  var data =  await authModel.signinAdminGeneral(req,res);
  if(data.length==0){
    return res.status(401).send({
      accessToken: null,
      error:"email",
      message: "Invalid email or password!"
    });
  }
  var passwordIsValid =  bcrypt.compareSync(
    req.body.password,
    data[0].password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      error:"password",
      message: "Invalid Password!"
    });
  }

  var token = jwt.sign({ id: data.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

  console.log(data[0].role);

  if(data[0].role==="adminGeneral"){
  // console.log(data.role);
     res.status(200).send({
     accessToken: token,
    id: data[0].id,
    username: data[0].username,
    email: data[0].email,
    
  });
  }else{

    res.status(200).send({
      message: "vous Êtes pas un admin general"
    });

  }

 

};
exports.signinAdminCentre = async (req, res) => {

  var data =  await authModel.signinAdminCentre(req,res);

  if(data.length==0){
    return res.status(401).send({
      accessToken: null,
      error:"email",
      message: "Invalid email "
    });
  }

  var passwordIsValid =  bcrypt.compareSync(
    req.body.password,
    data[0].password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      error:"password",
      message: "Invalid Password!"
    });
  }

  var token = jwt.sign({ id: data.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

  if(data[0].role==="adminCentre"){

     res.status(200).send({
      accessToken: token,
      id: data[0].id,
      username: data[0].username,
      email: data[0].email,
  });
  }else{
    res.status(200).send({
      message: "vous Êtes pas un admin du centre"
    });

  }

 

};
exports.signinResponsableRayon = async (req, res) => {

  var data =  await authModel.signinResponsableRayon(req,res);

  if(data.length==0){
    return res.status(401).send({
      accessToken: null,
      error:"email",
      message: "Invalid email or password!"
    });
  }

  var passwordIsValid =  bcrypt.compareSync(
    req.body.password,
    data[0].password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      error:"password",
      message: "Invalid Password!"
    });
  }

  var token = jwt.sign({ id: data.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

  if(data[0].role==="responsableRayon"){

      res.status(200).send({
        accessToken: token,
        id: data[0].id,
        username: data[0].username,
        email: data[0].email,
  });
  }

  else{
    res.status(200).send({
      message: "vous Êtes pas un responsable du rayon"
    });

  }



};