const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    selectedTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    NotificationToken:{
        type:String,
        default:""
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports=mongoose.model("User",userSchema);