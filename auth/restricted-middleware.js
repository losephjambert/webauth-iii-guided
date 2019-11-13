const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // check that the token is valid
    const secret = process.env.JWT_SECRET || "is it secret is it safe?";
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // bad panda, token has been tampered with
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
