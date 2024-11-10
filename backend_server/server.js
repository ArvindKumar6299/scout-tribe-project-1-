const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const cors = require("cors");

const dotenv = require('dotenv');
const salesManagerRoutes = require('./router/salesManagerRoutes');
const hrRoutes = require("./router/hrRoutes");
const labourRoutes = require("./router/labourRoutes");


dotenv.config();


// lets takel cors
const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST , PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

//middleware
app.use(express.json());  //parses incoming request bodies with JSON payloads.

app.use("/api/auth", router)
app.use("/api/salesManager", salesManagerRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/labour", labourRoutes);

// app.get("/",(req,res)=>{

//     //res.status --> server will send data as respose
//     // res.status(200).send('Welcome new admin panel bulding ');
//     res.send("Loading..")
// })


connectDb().then(()=>{
    app.listen(4000, (err)=>{
        if(err) console.log(err);
        console.log("SERVER IS RUNNING....");
    })
})
// app.listen(4000, (err)=>{
//     if(err) console.log(err);
//     console.log("SERVER IS RUNNING....");
// })