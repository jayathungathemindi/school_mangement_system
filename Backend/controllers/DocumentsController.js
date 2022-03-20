const mongoose = require("mongoose");
const Document = require("../models/Document");

module.exports = {
  saveDocument: async (req, res) => {
    console.log(req.body);
    const documentPath =
      "http://localhost:3000/add/document" + req.file.filename; // Note: set path dynamically
    var document = new Document({
      _id: new mongoose.Types.ObjectId(),
      tid: req.body.tid,
      grade: req.body.grade,
      documentName: req.bodyfilename,
      documentPath: documentPath,
    });
    console.log(document);
    document.save((err) => {
      if (!err) {
        return res.json({
          success: true,
          message: "Document saved successfully",
        });
      }
    });
  },
};
