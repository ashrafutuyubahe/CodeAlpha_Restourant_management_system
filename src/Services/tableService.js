const  Table  = require('../Entity/Table');  


exports.addTable = async (req, res) => {
  try {
    const { tableNumber, status } = req.body; 

  
    if (!tableNumber || !status) {
      return res.status(400).json({ error: "tableNumber and status are required" });
    }

  
    const validStatuses = ['available', 'reserved'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status. It must be 'available' or 'reserved'" });
    }

  
    const newTable = await Table.create({ tableNumber, status });

    res.status(201).json({ message: "Table added successfully", table: newTable });  
  } catch (error) {
    res.status(500).json({ error: error.message });  // Handle errors and send error response
  }
};


exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.findAll(); 
    res.status(200).json(tables);  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getTableById = async (req, res) => {
  try {
    const tableId = req.params.tableId;  
 
    if (!tableId) {
      return res.status(400).json({ error: "Table ID is required" });
    }

    const table = await Table.findByPk(tableId); 
    if (!table) {
      return res.status(404).json({ error: "Table not found" });
    }

    res.status(200).json(table); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};


exports.updateTableStatus = async (req, res) => {
  try {
    const tableId = req.params.tableId;  
    const { status } = req.body;  

  
    if (!tableId || !status) {
      return res.status(400).json({ error: "Table ID and status are required" });
    }

    const validStatuses = ['available', 'reserved'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status. It must be 'available' or 'reserved'" });
    }

    const table = await Table.findByPk(tableId);
    if (!table) {
      return res.status(404).json({ error: "Table not found" });
    }

    table.status = status;  
    await table.save();  

    res.status(200).json({ message: "Table status updated", table });  
  } catch (error) {
    res.status(500).json({ error: error.message });  
};
}

exports.deleteTable = async (req, res) => {
  try {
    const tableId = req.params.tableId; 

    
    if (!tableId) {
      return res.status(400).json({ error: "Table ID is required" });
    }

    const table = await Table.findByPk(tableId); 
    if (!table) {   
      return res.status(404).json({ error: "Table not found" });
    }

    await table.destroy();  
    res.status(200).json({ message: "Table deleted successfully" }); 
  } catch (error) {
    res.status(500).json({ error: error.message });     
  }
};
