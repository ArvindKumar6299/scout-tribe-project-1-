const express = require('express');
const { getLabourDetails, updateTasks } = require('../controllers/labourController');
const router = express.Router();

router.get('/:id', getLabourDetails);
router.put('/:id/tasks', updateTasks);

module.exports = router;
