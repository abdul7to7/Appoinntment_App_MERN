const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    // console.log(token);
    if (!token) {
      res.status(401).send("Not Authorized");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.send(err, "not authorized");
      req.user = data;
      console.log(data);
      next();
    });
  } catch (e) {
    return res.send(e);
  }
};

module.exports = verifyToken;
