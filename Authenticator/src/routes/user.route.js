const router = require("express").Router();
const userController = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");
router.get("/register", userController.registerViewController);
router.post("/register", userController.registerUserController);
router.get("/login", userController.loginViewController);
router.post("/login", userController.loginUserController);
router.get("/profile", userMiddleware.authUser, (req, res) => {
  res.send("profile");
});
router.get("/feed", userMiddleware.authUser, userController.feedVeiwController);
module.exports = router;
