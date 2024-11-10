const mongoose = require("mongoose");


const salesManagerSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
         required: true,
        //  unique: true
    },
    password: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        default: 'sales_manager',
    },
    salesData: [{type:mongoose.Schema.Types.ObjectId, ref:'Sales'}],
});


module.exports = mongoose.model('SalesManager', salesManagerSchema);