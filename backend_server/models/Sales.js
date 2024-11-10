const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    salesManager: { type: mongoose.Schema.Types.ObjectId, ref: 'SalesManager' }
});

module.exports = mongoose.model('Sales', salesSchema);
