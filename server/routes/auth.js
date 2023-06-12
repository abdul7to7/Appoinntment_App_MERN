const express = require("express");
const {
  createUser,
  login,
  getUserDataCtrl,
  getallusers,
} = require("../controllers/Auth");
const verifyToken = require("../utils/verifyToken");
const jwtVerify = require("../Middlewares/jwtVerify");

const authRouter = express.Router();

//router 1 register
authRouter.post("/register", createUser);

authRouter.post("/login", login);

authRouter.get("/checkauth", verifyToken, (req, res, next) => {
  res.send(`Hello ${req.user} you are logged in`);
});

authRouter.get("/getUserData", jwtVerify, getUserDataCtrl);

authRouter.get("/getallusers", getallusers);

module.exports = authRouter;
