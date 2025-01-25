const jwt = require("jsonwebtoken");
const User = require("../Entity/Users");


const checkAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Authorization header missing or malformed" });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.Role !== "admin") {
      return res.status(403).json({ error: "Access denied: Admins only" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Authentication failed", details: err.message });
  }
};


const checkCustomer = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Authorization header missing or malformed" });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.Role !== "customer") {
      return res.status(403).json({ error: "Access denied: Customers only" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Authentication failed", details: err.message });
  }
};

module.exports = { checkAdmin, checkCustomer };
