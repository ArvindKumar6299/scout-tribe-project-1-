const express = require('express');
const { getAllLabours, addAttendance } = require('../controllers/hrController');
const router = express.Router();

router.get('/labours', getAllLabours);
router.post('/attendance', addAttendance);

module.exports = router;
