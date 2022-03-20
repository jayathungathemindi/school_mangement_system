const User = require("../models/User");
const Teacher= require("../models/Teacher");
const mongoose = require("mongoose");

module.exports={

    getByTeacher : async (req,res) =>{

        try{
            Teacher.find()
            .exec()
            .then((Teachers) =>{
                console.log(Teachers);
            });

        }
        catch(error){
            console.log(err);
            res.json({
                successs:false,
              
            });
        }
    },
}


