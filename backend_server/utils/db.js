require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const URI = process.env.MONGO_URI;
// const MONGO_URI = "mongodb+srv://arvindkumar735240:SKoJrNRb4FA6m74O@cluster0.mgu4x.mongodb.net/";

const connectDb = async () =>{
    try {
        // await  mongoose.connect(MONGO_URI);
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;