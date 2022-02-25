const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.post("/user/addnewUser", UserController.addUser);
router.post("/user/addAdmin", UserController.addAdmin);
router.delete("/user/delete/:userId", UserController.deleteAdmin);
router.post("/user/login", UserController.login);
router.get("/user/getById/:userId", UserController.getById);
router.post("/user/editProfile/:userId", UserController.editProfile);

module.exports = router;
