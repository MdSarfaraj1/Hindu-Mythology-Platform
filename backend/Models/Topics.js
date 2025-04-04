const mongoose=require("mongoose");
const topicSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:[String],
        required:true
    },
    usercount:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        
    },
    image:{
        type:String,
        required:true,
        default:" https://mysticalbee.com/wp-content/uploads/2017/09/Hindu-God-1280x720.jpg"
    },  

});

module.exports=mongoose.model("Topic",topicSchema);
