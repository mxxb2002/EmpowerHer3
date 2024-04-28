// authentication middleware
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Extract token from request headers
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // Verify and decode the token
    let decoded = jwt.verify(
      token.split(" ")[1].trim(),
      process.env.JWT_SECRET_KEY
    );
    // Attach user information to the request object
    req.user = decoded;
    next(); // Move to the next middleware or route handler
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = authenticateUser;
