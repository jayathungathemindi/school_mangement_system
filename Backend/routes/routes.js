const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.post("/user/addnewUser", UserController.addUser);
router.post("/user/addAdmin", UserController.addAdmin);
router.delete("/user/delete/:userId", UserController.deleteAdmin);
router.post("/user/login", UserController.login);
module.exports = router;
