const User = require("../models/User");
const Teacher = require("../models/Teacher");
const mongoose = require("mongoose");

module.exports = {
  getTeacher: async (req, res) => {
    try {
      const dataArr = new Array();
      Teacher.find()
        .exec()
        .then((teachers) => {
          console.log(teachers);

          teachers.map(async (teacher) => {
            dataArr.push(teacher.u_id);
            // console.log(dataArr)
          });

          User.find({ _id: { $in: dataArr } })
            .exec()
            .then((users) => {
              console.log(users);
              return res.json({
                success: true,
                teachers: teachers,
                users: users,
              });
            });
        });
    } catch (error) {
      console.log(err);
      res.json({
        successs: false,
      });
    }
  },

  getTeacherCount : async(req,res ) =>{

    try{
    
     Teacher.count().then((count)=>{  
      res.json({
      successs:true,
     count:count
  })})
         
    }

    catch(error){
           
      res.json({
          successs:false,
          message:"faile"
      })
  }
  }

};
