const express = require("express");
const router = express.Router();

// const {home ,register}= require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");


router.route("/home").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);

// router.get('/test1',(req,res)=>{
//     res.send("is every thing good!");
// })


// router.route("/".get((req,res)=>{
//     res.send("I am fine what about you!")
// }));

module.exports = router;