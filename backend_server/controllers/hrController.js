const Labour = require('../models/labour');
const Attendance = require('../models/attendance');

// Get all labour records
const getAllLabours = async (req, res) => {
    try {
        const labours = await Labour.find().populate('assignedManager', 'username');
        res.status(200).json(labours);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching labours', error });
    }
};

// Add attendance
const addAttendance = async (req, res) => {
    try {
        const { user, date, inTime, outTime } = req.body;
        const attendance = new Attendance({ user, date, inTime, outTime });
        await attendance.save();
        res.status(201).json({ message: 'Attendance recorded successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding attendance', error });
    }
};

module.exports = {getAllLabours, addAttendance}