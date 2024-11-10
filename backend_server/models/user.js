const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        // select: false // hide in queries to protect the login ID
    },
    password: {
        type: String,
        required: true,
        // select: false
    },
    email:{
       type: String,
       required: true,
    },
    // phone:{
    //     type:String,
    //     required: true,
    // },
    role: {
        type: String,
        enum: ['Admin' , 'SalesManager', 'Labour' , 'HR'],
        required: true,
    },
    assignedArea: { type: String, enum: ['Noida', 'Delhi', 'Greater Noida'] },
    isAdmin:{
        type: Boolean,
        default: false,
    },
  

    // createdAt: {type:Date, default:Date.now},
    // lastLogin: Date
});


// secure the password with the bcrypt 
userSchema.pre('save', async function (next){
  //console.log("pre method", this);
  const user = this;

  if(!user.isModified("password")){
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound)
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
})


// compare the password
userSchema.methods.comparePassword = async function(password){
    return   bcrypt.compare(password, this.password);
}


//json web token
userSchema.methods.generateToken = async function(){
  try {
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    }, 
    process.env.JWT_SECRET_KEY,
    {expiresIn: "30d"}
);
  } catch (error) {
    console.log(error);
  }
};


module.exports = mongoose.model('User', userSchema);