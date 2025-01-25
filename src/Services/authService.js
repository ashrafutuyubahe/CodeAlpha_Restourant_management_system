const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../Entity/Users");

exports.register = async (req, res) => {
    const { userName, userEmail, userPassword, role } = req.body;

  try {

    const existingUser = await User.findOne({
      where: { userEmail,Role:role },
    });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "USER email already registered." });

    const hashedExistingUser = await bcrypt.hash(userPassword, 10);

    const newUser = await User.create({
      userName,
      userEmail,
      userPassword: hashedExistingUser,
      Role:role,
    });

  
    res
      .status(201)
      .json({ message: "user registered successfully.", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed.", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { userEmail, userPassword,role } = req.body;

    const user = await User.findOne({ where: { userEmail,Role:role } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      userPassword,
      user.userPassword
    );
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.userId, role: user.Role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res
      .status(200)
      .json({ message: "Login successful", token, role: user.Role });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};
