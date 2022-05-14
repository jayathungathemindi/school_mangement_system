const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  tid: { type: String },
  grade: { type: Number },
  documentName: { type: String },
  documentPath: { type: String, required: true },
  subject: { type: String },
});

const Document = mongoose.model("Document", DocumentSchema);

module.exports = Document;
