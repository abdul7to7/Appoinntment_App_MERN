const mongoose = require("mongoose");

const docSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    number: {
      type: Number,
      required: [true, "Phone no. name is required"],
    },
    email: {
      type: String,
      required: [true, "email name is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address name is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is required"],
    },
    experience: {
      type: Number,
      required: [true, "experience is required"],
    },
    feesPerConsultation: {
      type: Number,
      required: [true, "fess is required"],
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    timings: {
      type: Object,
      //required: [true, "work timings name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("doctors", docSchema);
