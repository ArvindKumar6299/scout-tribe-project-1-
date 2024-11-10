const express = require('express');
const { getSalesData, addSalesRecord } = require('../controllers/salesManagerController');
const router = express.Router();

router.get('/:id/sales', getSalesData); // Get sales data for a specific Sales Manager
router.post('/sales', addSalesRecord); // Add new sales record

module.exports = router;



// const express = require("express");
// const {registerSalesManager, loginSalesManager} = require("../controllers/salesManagerController");
// const {auth, authorizeRole} = require("../middleware/authMiddleware");

// const router = express.Router();


// router.post('/managerRegister', registerSalesManager);
// router.post('/managerLogin', loginSalesManager);

// // Protected route example
// router.get('/dashboard', auth, authorizeRole('sales_manager'), (req, res) => {
//     res.json({ message: 'Welcome to the Sales Manager dashboard' });
//   });


// module.exports = router;