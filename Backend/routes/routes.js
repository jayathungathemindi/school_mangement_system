const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.post("/user/addnewUser", UserController.addUser);

module.exports = router;
