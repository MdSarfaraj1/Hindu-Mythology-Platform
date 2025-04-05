const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Stories = require("../Models/Stories");
const { transporter } = require("../Utils/mailTransporter");

exports.verifyemail=async(req, res) => {
  try{ 
     const { email } = req.body;
     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Verification of email",
    html: `<p>Here is the otp to verify your email</p>
          <p>OTP: ${otp}</p> `}
  await transporter.sendMail(mailOptions);
  res.status(200).json({OTP:otp})
  }catch (error) {
  console.error(error);
  res.status(500).json({ message: "Error in password reset request" });
}
}

exports.signup = async (req, res) => {
    try {
      const data = req.body;
      if(!data.username||!data.password||!data.email)  //if bypassed the frontend
        return res.status(422).json({message:"Please provide all details"})
      let existingUser = await User.findOne({
        $or: [{ email: data.email }, { username: data.username }],
      });
  
      if (existingUser) {
        const field = existingUser.email === data.email ? "email" : "username";
        return res
          .status(409)
          .json({ message: `This ${field} is already registered` });
      }
  
      const hashPassword = await bcrypt.hash(data.password, 10);
      data.password = hashPassword;
      let newUser = new User(data);
      await newUser.save();
      const newToken = jwt.sign({ UserID: newUser._id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      
      res
        .status(201)
        .cookie("sessionToken", newToken, { maxAge: 24 * 60 * 60 * 1000 })
        .json({
          message: "User created successfully!",
          userID: newUser._id,
          username: newUser.username,
        });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Server error during registration" });
    }
  };

  exports.login=async (req, res) => {
    const token = req.cookies.sessionToken;
    if (token) {
      try {
        jwt.verify(token, process.env.secret_key);
        return res.status(400).json({
          message: "You are already logged in.",
        });
      } catch (err) {
        // Token is invalid or expired, continue with login
        res.clearCookie("sessionToken");
      }
    }
    let data = req.body;
    let user = await User.findOne({ email: data.email });
    if (user && (await bcrypt.compare(data.password, user.password))) {
      const newToken = jwt.sign({ UserID: user._id }, process.env.secret_key, {
        expiresIn: "24h",
      });
      let maximumAge=data.remember?7*24 * 60 * 60 * 1000:24 * 60 * 60 * 1000;
      return res
        .status(200)
        .cookie("sessionToken", newToken, { maxAge: maximumAge })
        .json({
          message: `Welcome ${user.username}`,
          userID: user._id,
          username: user.username,
        });
    }
  
    res.status(409).json({
      message: "User Does not exist or wrong credentials provide",
    });
  }

  exports.logout= (req, res) => {
    try {
     
      res
        .clearCookie("sessionToken", {
          httpOnly: true,
        })
        .json({
          message: "Logged out successfully",
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }

  exports.updateProfile= async (req, res) => {
    data = req.body.userProfile;
    console.log(data);
    const user = await User.findById(req.body.userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.username = data.username;
      user.email = data.email;
      user.storyLanguage = data.storyLanguage;
      await user.save();
      res.status(200).json({ message: "Profile Updated Successfully" });
    }
  }

  exports.getProfile=async (req, res) => {
    const user = await User.findById(req.body.userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({
        username: user.username, 
        email: user.email,
        storyLanguage: user.storyLanguage, 
      });
    }
  }
  exports.verifyAuthToken=(req,res)=>{
    const token = req.cookies.sessionToken;
    if (!token) {
      return res.status(401).json({message:"token not present"});
    }
    else{
      return res.status(200).json({message:"token present"})
    }
  }

  exports.getUserStories=async (req, res) => {
    try{
       const Stories = await User.findById(req.query.userID).populate("savedStories").select("savedStories");
       if(Stories==null){
        return res.status(204).json({
    message:"no story saved yet"
  })
       }
    const cleanedStories = Stories.savedStories.map(({_id, heading, story }) => ({
      id:_id.toString(),
      heading,
      story,
    }));
    cleanedStories.map(obj=>({
      ...obj,
      story:obj.story.map(({_id,...rest})=>rest)
    }))
    console.log(cleanedStories)
    res.status(200).json({
      message:cleanedStories
    });
    }catch(e){
      res.status(500).json({
        message:`Some problem to /stories route${e}`
      })
    }
   
  
  }

  exports.deleteUserStory=async(req,res)=>{
    let storyID=req.body.storyID
    try{
       await User.findByIdAndUpdate(req.body.userID,{$pull:{savedStories:req.body.storyID}}); 
     await Stories.findByIdAndDelete(storyID);
     res.status(200).json({message:"Story deleted Successfully"})
    }catch(e){
      res.status(500).json({message:"Some error occured in server side"})
    }
   
    
  }