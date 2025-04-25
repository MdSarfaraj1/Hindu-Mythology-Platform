const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Stories = require("../Models/Stories");
const { transporter } = require("../Utils/mailTransporter");
const { OAuth2Client } = require('google-auth-library');

// Initialize Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

// Verify Google token
async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    return ticket.getPayload();
  } catch (error) {
    console.error("Error verifying Google token:", error);
    return null;
  }
}

// Google login function
exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;
    
    // Verify the Google token
    const payload = await verifyGoogleToken(credential);
    
    if (!payload) {
      return res.status(400).json({ message: "Invalid Google token" });
    }
    
    // Extract user information from the payload
    const { email, name, sub: googleId, picture } = payload;
    
    // Check if user exists in your database
    let user = await User.findOne({ email });
    
    if (!user) {
      // User doesn't exist, create a new one
      const randomPassword = Math.random().toString(36).slice(-10);
      const hashPassword = await bcrypt.hash(randomPassword, 10);
      
      user = new User({
        username: name,
        email,
        googleId,
        profilePicture: picture,
        password: hashPassword
      });
      
      await user.save();
    } else if (!user.googleId) {
      // If user exists but doesn't have a Google ID, update it
      user.googleId = googleId;
      if (picture && !user.profilePicture) {
        user.profilePicture = picture;
      }
      await user.save();
    }
    
    // Create JWT token
    const newToken = jwt.sign({ UserID: user._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    
    // Set cookie and send response
    res
      .status(200)
      .cookie("sessionToken", newToken, { 
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,     
        sameSite: 'none',  
        path: '/'
      })
      .json({
        message: `Welcome ${user.username}`,
        userID: user._id,
        username: user.username,
        profilePicture: user.profilePicture ||"userLogo.png",
      });
    
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: "Server error during Google login" });
  }
};

// Google signup function (can reuse login logic if you want)
exports.googleSignup = async (req, res) => {
  try {
    return await exports.googleLogin(req, res);
  } catch (error) {
    console.error("Google signup error:", error);
    res.status(500).json({ message: "Server error during Google signup" });
  }
};


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
        .cookie("sessionToken", newToken, { maxAge: 48 * 60 * 60 * 1000 })
        .json({
          message: "User created successfully!",
          userID: newUser._id,
          username: newUser.username,
          profilePicture: newUser.profilePicture ||"userLogo.png",
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
      let maximumAge=data.remember?7*24 * 60 * 60 * 1000:24 * 60 * 60 * 1000;
      const newToken = jwt.sign({ UserID: user._id }, process.env.secret_key, {
        expiresIn: maximumAge,
      });
      
      return res
  .status(200)
  .cookie("sessionToken", newToken, { 
    maxAge: maximumAge,
    httpOnly: true,
    secure: true,     
    sameSite: 'none',  
    path: '/'
  }).json({
          message: `Welcome ${user.username}`,
          userID: user._id,
          username: user.username,
          profilePicture: user.profilePicture ||"userLogo.png",
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
  