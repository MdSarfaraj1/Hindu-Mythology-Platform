const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config();

module.exports.isLoggedIn = async (req, res, next) => {
  
    const token = req.cookies.sessionToken;
    if (!token) {
        console.log("message from loogedin middleware : no token")
        return res.status(401).json({
            message: "Please login First"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
    
        req.user = await User.findById(decoded.UserID).populate('selectedTopics');

        if (!req.user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
