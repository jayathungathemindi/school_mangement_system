const User = require("../models/User");
const Student = require("../models/Student");
const mongoose = require("mongoose");

module.exports = {
  getByGrade: async (req, res) => {
    try {
      const dataArr = new Array();
      Student.find({ grade: req.body.grade }) //studenttable.find({grade:req.body.grade}).exec().then((students)=>{console.log(students)})//=--->for()-->one by one run student-->user table ekatag ghn -->user id parameter-->
        .exec()
        .then((students) => {
          console.log(students);

          students.map(async (student) => {
            dataArr.push(student.u_id);
            // console.log(dataArr)
          });

          User.find({ _id: { $in: dataArr } })
            .exec()
            .then((students) => {
              console.log(students);
              return res.json({
                success: true,
                students: students,
              });
            });

          // setTimeout(()=>{console.log(dataArr)},2000)

          // console.log(dataArr)

          //forloop
          //one by one user id eka aran User.findone({}).........exec().then((stu)=>console.log(stu));
        });
    } catch (error) {
      res.json({
        success: false,
        message: "*** Error occurd can not find a user  ***",
      });
    }
  },
};
