const mongoose=require("mongoose")
const storySchema=new mongoose.Schema({
    heading: String,
    noti: String,
    story: [
      {
        head: String,
        content: String,
      }
    ],
    createdAt:{
      type:Date,
      default:()=> new Date(),
      expires:1
    },
    noExpiry:{
      type:Boolean,
      default:false
    }

});
storySchema.pre("save", function (next) {
  if (this.noExpiry) {
    this.createdAt = undefined; // Remove expiry
  }
  next();
});

module.exports=mongoose.model("Story",storySchema);