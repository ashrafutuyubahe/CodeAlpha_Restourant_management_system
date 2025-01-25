const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../Entity/Users');


  exports.register=  async (req, res) => {
    try {
        const { customerName, customerEmail, customerPassword, role } = req.body;
        
        
       
        const existingCustomer = await CustomerEntity.findOne({ where: { customerEmail } });
        if (existingCustomer) return res.status(400).json({ message: 'customerEmail already registered.' });

       
        const hashedcustomerPassword = await bcrypt.hash(customerPassword, 10);

       
        const Customer = await CustomerEntity.create({ customerName, customerEmail, customerPassword: hashedcustomerPassword, role });

        res.status(201).json({ message: 'Customer registered successfully.', Customer });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed.', error });
    }
};




exports.login = async (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;
  
      const user = await User.findOne({ where: { userEmail } });
      if (!User) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { userId: user.userId, role: user.Role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.status(200).json({ message: "Login successful", token, role: user.Role });
    } catch (err) {
      res.status(500).json({ error: "Server error", details: err.message });
    }
  };