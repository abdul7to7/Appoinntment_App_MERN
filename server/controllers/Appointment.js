const AppointmentModel = require("../models/AppointmentModel");

const makeAnAppointment = async (req, res) => {
  try {
    const newAppointment = await AppointmentModel(req.body);
    newAppointment.save();
    res.send({
      success: true,
      message: "Appointment saved successfully",
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      message: `${e} -->error from makeanappointment controller`,
    });
  }
};

const getmyappointments = async (req, res) => {
  try {
    const myappointments = await AppointmentModel.find({
      userId: req.body.userId,
    });
    res.send(myappointments);
  } catch (e) {}
};

const getallappointments = async (req, res) => {
  try {
    const allap = await AppointmentModel.find();
    res.send(allap);
  } catch (e) {
    console.log(`${e} -->error from getallapointments controller`);
  }
};

const deleteappointment = async (req, res) => {
  console.log(req.headers._id);
  try {
    await AppointmentModel.findOneAndDelete({ _id: req.headers._id });
    res.send({
      success: true,
      message: "Appointment has been deleted",
    });
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  makeAnAppointment,
  getmyappointments,
  getallappointments,
  deleteappointment,
};
