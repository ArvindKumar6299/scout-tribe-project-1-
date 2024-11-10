const User = require("../models/user");


const home = async(req,res) =>{
  try {
    res
      .status(200)
      .send("Welcome mr arvind yadav")
  } catch (error) {
     console.log(error);
  }
}

const register = async (req,res) =>{
    try {
        
        console.log(req.body);
        const {username, password,email, role} = req.body;

        // checking for earlier registered
        const userExist = await  User.findOne({email: email});

        if(userExist){
          return res.status(400).json({msg: "email already exists"});
        }

        const userCreated = await User.create({username, password,email,role});


        res
        .status(200)
        .json({
          message: "regristation sucessful", 
           token: await userCreated.generateToken(),
          userId: userCreated._id.toString(),
        });

    } catch (error) {
        res.status(500).json("internal server error");
    }
}


//*****  Login Logic */
const login = async (req,res) =>{
  try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});
    console.log(userExist);

    if(!userExist){
      return res.status(400).json({message: "Invalid Credentials"});
    }

    // const userPassword = await compare(password, userExist.password);
    const userPassword =  await userExist.comparePassword(password);

   if(userPassword){
    res.status(200).json({
      msg: "login successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    })
   }else{
    res.status(401).json({message: "invalid email or password"})
   }

  } catch (error) {
    res.status(500).json("internal server error");
  }
}


module.exports ={ home, register ,login};