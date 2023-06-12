const mongoose = require("mongoose");
const DoctorModel = require("../models/DoctorModel");
const applydoctor = async (req, res) => {
  try {
    docExist = await DoctorModel.findOne({ email: req.body.email });
    if (docExist) {
      return res.send({
        success: false,
        message: "Doc already exist -->Error from doc controller",
      });
    }
    const doc = new DoctorModel({
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      number: req.body.number,
      address: req.body.address,
      specialization: req.body.specialization,
      experience: req.body.experience,
      feesPerConsultation: req.body.feesPerConsultation,
      timings: req.body.timings,
    });
    await doc.save();
    res.send({
      success: true,
      message: "doc saved successfully",
    });
  } catch (e) {
    console.log(`${e} -->error from doc controller`);
  }
};

const getalldocs = async (req, res) => {
  try {
    const alldocs = await DoctorModel.find({});
    res.send(alldocs);
  } catch (e) {
    console.log(`${e} -->error from getalldoc controller`);
  }
};

const approvedoc = async (req, res) => {
  console.log("lassan", req.body.docId);
  try {
    const currentDoc = await DoctorModel.findOneAndUpdate(
      { _id: req.body.docId },
      {
        isApproved: true,
      }
    );
    console.log("Approved Succesfully");
    res.send({
      success: true,
      message: "approved Successfully",
    });
  } catch (e) {
    console.log(`${e} -->error from approveDoc controller`);
  }
};

const deletedoc = async (req, res) => {
  try {
    console.log(req.body.docId);
    await DoctorModel.findOneAndDelete(req.body.docId);
    res.send({
      success: true,
      message: "Doctor deleted",
    });
  } catch (e) {
    console.log(`{e} -->error from delete doc controller`);
  }
};

module.exports = { applydoctor, getalldocs, approvedoc, deletedoc };
