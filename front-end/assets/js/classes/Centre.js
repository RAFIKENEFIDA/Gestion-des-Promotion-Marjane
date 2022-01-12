import port from "../../port.js";
import token from "../../token.js";

export default class Centre  {

    static getAllCentre=async() =>{

        var Centres;

          try{
            const res = await fetch(port+"/view/centre", {
              method: "GET",
              headers: { 
                "Content-Type": "application/json" ,
              "x-access-token":token},
            });
              Centres=await res.json();
              return Centres.data;
          } catch(error){
            console.log(error)
          }

        };

    };


