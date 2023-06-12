const express = require("express");
const {
  applydoctor,
  getalldocs,
  deletedoc,
  approvedoc,
} = require("../controllers/DocController");
const jwtVerify = require("../Middlewares/jwtVerify");
const docRouter = express.Router();

//apply-doc
docRouter.post("/apply-doctor", jwtVerify, applydoctor);

//get all doc
docRouter.get("/getalldocs", getalldocs);

docRouter.post("/approvedoc", approvedoc);

docRouter.post("/deletedoc", deletedoc);

module.exports = docRouter;
