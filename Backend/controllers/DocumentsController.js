const mongoose = require("mongoose");
const Document = require("../models/Document");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

module.exports = {
  saveDocument: async (req, res) => {
    try {
      // console.log(req.body);
      const documentPath =
        "http://localhost:3000/documents/" + req.file.filename; // Note: set path dynamically

      var teacherData = {};
      await Teacher.findOne({ u_id: req.body.tid })
        .exec()
        .then((teacher) => {
          teacherData = teacher;
        });
      var subject = teacherData.subject;

      var document = new Document({
        _id: new mongoose.Types.ObjectId(),
        tid: req.body.tid,
        grade: req.body.grade,
        documentName: req.body.filename,
        documentPath: documentPath,
        subject: subject,
      });
      // console.log(document);
      document.save((err) => {
        if (!err) {
          return res.json({
            success: true,
            message: "Document saved successfully",
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
  getdocumets: async (req, res) => {
    try {
      var userData = [];
      console.log(req.params);
      await Student.findOne({ u_id: req.params.id })
        .exec()
        .then((student) => {
          userData = student;
        });

      await Document.find({
        subject: req.params.subject,
        grade: userData.grade,
      })
        .exec()
        .then((documents) => {
          res.json({
            successs: true,
            message: "sucess",
            documents: documents,
          });
        });
    } catch (error) {
      res.json({
        successs: false,
        message: "faile",
      });
    }
  },
};
