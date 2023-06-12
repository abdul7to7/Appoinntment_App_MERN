const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./db");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const docRouter = require("./routes/doctor");
const appointmentRouter = require("./routes/appointment");

dotenv.config();

dbConnect();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/doc", docRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/appointment", appointmentRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res
    .status(errorStatus)
    .json({ success: false, message: errorMessage, stack: err.stack });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is Running");
});
