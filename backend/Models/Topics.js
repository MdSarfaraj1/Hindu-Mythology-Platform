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
        default:"https://www.google.com/imgres?q=hinduism&imgurl=https%3A%2F%2Fmysticalbee.com%2Fwp-content%2Fuploads%2F2017%2F09%2FHindu-God-1280x720.jpg&imgrefurl=https%3A%2F%2Fmysticalbee.com%2Fbeliefs-of-hinduism-religion%2F&docid=3jDetroE2hFhkM&tbnid=3hlQl4xKFbcWcM&vet=12ahUKEwjawIfIgrqMAxWNsFYBHR-AF2MQM3oECBgQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjawIfIgrqMAxWNsFYBHR-AF2MQM3oECBgQAA"
    },  

});

module.exports=mongoose.model("Topic",topicSchema);
