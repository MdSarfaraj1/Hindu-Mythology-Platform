const mongoose=require("mongoose")
const storySchema=new mongoose.Schema({
    heading: String,
    noti: String,
    story: [
      {
        head: String,
        content: String,
      }
    ]

});
module.exports=mongoose.model("Story",storySchema);