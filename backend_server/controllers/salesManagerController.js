const SalesManager = require('../models/SalesManager');
const Sales = require('../models/Sales');

// Get all sales data for a Sales Manager
 const getSalesData = async (req, res) => {
    try {
        const salesManager = await SalesManager.findById(req.params.id).populate('salesData');
        if (!salesManager) return res.status(404).json({ message: 'Sales Manager not found' });
        res.status(200).json(salesManager.salesData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving sales data', error });
    }
};

// Add a sales record
const addSalesRecord = async (req, res) => {
    try {
        const { salesManagerId, amount } = req.body;
        const newSalesRecord = new Sales({ amount, salesManager: salesManagerId });
        await newSalesRecord.save();

        // Update SalesManager's salesData array
        await SalesManager.findByIdAndUpdate(salesManagerId, {
            $push: { salesData: newSalesRecord._id }
        });

        res.status(201).json({ message: 'Sales record added successfully!', newSalesRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error adding sales record', error });
    }
};

module.exports = {getSalesData ,addSalesRecord}





// // controllers/salesManagerController.js
// const SalesManager = require('../models/salesManager');
// const Sales = require("../models/Sales")
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const registerSalesManager = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const manager = new SalesManager({ name, email, password: hashedPassword });
//     await manager.save();
//     res.status(201).json({ message: 'Sales Manager registered' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering Sales Manager', error });
//   }
// };

// const loginSalesManager = async (req, res) => {
//   const { email, password } = req.body;
//   const manager = await SalesManager.findOne({ email });
//   if (!manager || !(await bcrypt.compare(password, manager.password))) {
//     return res.status(400).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ id: manager._id, role: manager.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// };


// module.exports = {registerSalesManager, loginSalesManager};