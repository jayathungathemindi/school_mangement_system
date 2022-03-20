const user =require("../models/User");
const Teacher = require("../models/Teacher");
const mongoose=require("mongoose");
const User = require("../models/User");
const Student = require("../models/Student");

module.exports={
    //get
    getBystudent: async (req,res)=>{
        try{
            console.log(req.params.body)
            Student.findOne({ _id: req.params.userId })
            .exec()
            .then((student) =>
            {console.log(student);
            return res.json({
                message:"student "
              
            });
            })
            
        }
        catch(error){
           
            res.json({
                successs:false,
                message:"faile"
            })
        }
        


    },

//delete
    deleteByStudent: async (req,res) =>{
        try{
            Student.remove({_id:req.body.userid})
            .exec()
            .then(()=> {
            return res.status(200).json({
                massage:"student deleate"
              
            });
        })
        
    }
    
        catch(error){
            console.log(err);
            res.json({
                successs:false,
                message:"faile"
            });
        }
        

},

//put/update/edit

putByStudent: async (req,res) =>{
    try{
        Student.findOne({ _id: req.params.userId })
        .exec()
        .then(Student=>{ 
        Student._id = req.params.userId;
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName;
          user.email = req.body.email;
          Student.save((err)=>{  if(!err){
            res.json({
                success:true,
                messaege:"student update",

            });

            

            }})
            
              })
            }catch(error) {
            res.json({
              success: false,
              message:" try again",
            });
          }
    },

   
    
postbyStudent: async (res, req) =>{//aluth obj ekak hadanna,e obj ekata apu values assign krnnn,save krnn
    
var studentData = new Student({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
});

studentData.save((err)=>{ 
     if(!err){
    res.json({
        success:true,
        messaege:"student save",

    });
   
}
})
}
}

