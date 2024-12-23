const mongoose=require("mongoose");
const topicSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    usercount:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        
    }

});

module.exports=mongoose.model("Topic",topicSchema);
