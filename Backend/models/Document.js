const mongoose = require('mongoose');

const DocumentSchema =new mongoose.Schema({
tid:{type:String},
grade:{type:String|Number},
documentName:{type:String},
documentPath: { type: String, required: true },
 
});




const Document = mongoose.model("Document", DocumentSchema);

module.exports =Document ;
