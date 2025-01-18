const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CustomerEntity = require('../Entity/Customers');


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
        const { customerEmail, customerPassword } = req.body;

        
        const Customer = await CustomerEntity.findOne({ where: { customerEmail } });
        if (!Customer) return res.status(400).json({ message: 'Invalid customerEmail or customerPassword.' });

        
        const isMatch = await bcrypt.compare(customerPassword, Customer.customerPassword);
        if (!isMatch) return res.status(400).json({ message: 'Invalid customerEmail or customerPassword.' });

       
        const token = jwt.sign({ id: Customer.id, role: Customer.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed.', error });
    }
};


