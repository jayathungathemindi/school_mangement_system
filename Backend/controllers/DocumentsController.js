
const mongoose = require("mongoose");
const Document=require('../models/Document')

module.exports={


saveDocument:async(req,res)=>{
            
    const documentPath = 'http://localhost:3000/add/document' + req.file.filename; // Note: set path dynamically
    var document = new Document({

        _id: new mongoose.Types.objectID(),
        tid:req.body.tid,
        grade:req.body.grade,
        documentName:documentPath

 
    });

    document.save((err)=>{
        if(!err){
            return res.json({
                success: true,
                message: "Document saved successfully",
             
              });
        

        };
    })




    


}};