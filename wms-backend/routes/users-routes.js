const router = require("express").Router();
const UsersController = require("../controller/UsersController");

router.post("/login", UsersController.login);
router.post("/register", UsersController.register);
router.get("/users", UsersController.getUsers);
router.get("/users/pemilik", UsersController.getPemiliks);
router.get("/users/:id", UsersController.getUserById);
router.put("/users/:id", UsersController.updateUser);

module.exports = router;
