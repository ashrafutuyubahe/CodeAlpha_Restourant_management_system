
const { User } = require('../Entity/Customers');


exports.createUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, Role } = req.body;
    const user = await User.create({ userName, userEmail, userPassword, Role });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, Role } = req.body;
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update({ userName, userEmail, userPassword, Role });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
