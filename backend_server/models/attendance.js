const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    inTime: Date,
    outTime: Date
});

module.exports = mongoose.model('Attendance', attendanceSchema);
