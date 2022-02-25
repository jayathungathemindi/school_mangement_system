const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.post("/user/addStudent", UserController.addStudent);
router.post("/user/addTeacher", UserController.addTeacher);
router.post("/user/addAdmin", UserController.addAdmin);
router.delete("/user/delete/:userId", UserController.deleteAdmin);
router.post("/user/login", UserController.login);
router.get("/user/getById/:userId", UserController.getById);
router.get("/user/admin/:role", UserController.getByRole);
router.post("/user/editProfile/:userId", UserController.editProfile);

module.exports = router;
