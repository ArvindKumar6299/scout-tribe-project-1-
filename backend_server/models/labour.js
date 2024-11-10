const mongoose = require("mongoose");

const labourSchema = new mongoose.Schema({
    name: String,
    assignedManager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    area: String,
    tasks: [{ type: String }],
    inTime: Date,
    outTime: Date
});

module.exports = mongoose.model('Labour', labourSchema);
