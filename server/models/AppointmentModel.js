const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    doctorId: {
      type: String,
    },
    doctorName: {
      type: String,
    },
    doctorEmail: {
      type: String,
    },
    name: {
      type: String,
      //required: [true, "first name is required"],
    },
    number: {
      type: Number,
      //required: [true, "Phone no. name is required"],
    },
    email: {
      type: String,
      //required: [true, "email name is required"],
    },

    address: {
      type: String,
      //required: [true, "address name is required"],
    },
    feesPerConsultation: {
      type: Number,
      //required: [true, "fess is required"],
    },
    timings: {
      type: Object,
      //required: [true, "work timings name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointment", appointmentSchema);
