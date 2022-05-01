const router = require("express").Router();

const UserController = require("../controllers/UserController");
const StudentController = require("../controllers/StudentControllers");
const EmployeeController = require("../controllers/EmployeeController");
const TeacherController = require("../controllers/TeacherController");
const DocumentsController = require("../controllers/DocumentsController");
const QuizControllerr = require("../controllers/QuizController");

const documentStroge = require("../helpers/documentStroge");
//import studentcontroller

router.post("/user/addStudent", UserController.addStudent);
router.post("/user/addTeacher", UserController.addTeacher);
router.post("/user/addAdmin", UserController.addAdmin);
router.delete("/user/delete/:userId", UserController.deleteAdmin);
router.post("/user/login", UserController.login);
router.get("/user/getById/:userId", UserController.getById);
router.get("/user/admin/:role", UserController.getByRole);
router.post("/user/editProfile/:userId", UserController.editProfile);
router.get("/user/getByGrade/:grade", StudentController.getByGrade);
router.get("/user/getBystudent/:userid", EmployeeController.getBystudent);
router.get("/user/getStudentCount",StudentController.getStudentCount);
router.get("/user/getTeacherCount",TeacherController.getTeacherCount);
router.delete(
  "/user/deleteByStudent/:userid",
  EmployeeController.deleteByStudent
);
router.patch("/user/putByStudent/:userid", EmployeeController.putByStudent);
router.get("/user/getTeacher", TeacherController.getTeacher);

router.post("/add/document", documentStroge, DocumentsController.saveDocument);
router.post("/add/quiz", QuizControllerr.addQuiz);
router.post("/user/student/enroll", StudentController.enroll);

//api =localhost3000/user/getStudentByGrade/:grade
//create the studentController
//imports models and mongoose lib
//module.export{all the function write}

//function name:async(req,res)=>{}

module.exports = router;
