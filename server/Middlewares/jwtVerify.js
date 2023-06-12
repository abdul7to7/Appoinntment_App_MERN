const jwt = require("jsonwebtoken");

const jwtVerify = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    // console.log(req.headers);
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.status(200).send({
          message: "Auth failed --> error from jwtVerify",
          success: false,
        });
      } else {
        req.body.userId = data.id;
        next();
      }
    });
  } catch (error) {
    console.log(`error from jwtVerify ${error}`);
    res.status(401).send({
      message: "Auth Failed -->error from jwtverify controller",
      success: false,
    });
  }
};
module.exports = jwtVerify;
