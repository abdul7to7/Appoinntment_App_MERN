const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));
  } catch (e) {
    console.log(`error ${e}`);
  }
};
module.exports = dbConnect;
