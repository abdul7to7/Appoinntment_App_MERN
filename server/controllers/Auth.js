const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(401).json("User not found");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //return res.send(user);
    if (!isPasswordCorrect) return res.status(401).json("wrong password");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { username, email } = user;
    res.status(200).json(token);
  } catch (e) {
    return res.send(`Error in login CTRL ${e.message}`);
  }
};

const createUser = async (req, res, next) => {
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) return res.status(500).json("User Already Exist");
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: req.body.isAdmin,
    });
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    return res.send(`Error in Register CTRL ${e.message}`);
  }
};

const getUserDataCtrl = async (req, res, next) => {
  try {
    //console.log(req.body.userId);
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user)
      return res.status(200).send({
        message: "User Not Found",
        success: false,
      });
    user.password = undefined;
    return res.status(200).send({
      data: user,
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "Something went wrong --> error from getUserDataCtrl",
      success: false,
    });
  }
};

const getallusers = async (req, res) => {
  try {
    const allusers = await userModel.find({});
    res.send(allusers);
  } catch (e) {
    console.log(`${e} -->Error from getallusers controller`);
  }
};

module.exports = { login, createUser, getUserDataCtrl, getallusers };
