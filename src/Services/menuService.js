const { Menu } = require('../Entity/Menu');


exports.createMenuItem = async (req, res) => {
  try {
    const { menuName, description, category, price, availability } = req.body;
    const menuItem = await Menu.create({ menuName, description, category, price, availability });
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.findAll();
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await Menu.findByPk(req.params.id);
    if (menuItem) {
      res.status(200).json(menuItem);
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateMenuItem = async (req, res) => {
  try {
    const { menuName, description, category, price, availability } = req.body;
    const menuItem = await Menu.findByPk(req.params.id);
    if (menuItem) {
      await menuItem.update({ menuName, description, category, price, availability });
      res.status(200).json(menuItem);
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await Menu.findByPk(req.params.id);
    if (menuItem) {
      await menuItem.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
