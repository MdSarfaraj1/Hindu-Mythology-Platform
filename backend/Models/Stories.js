const mongoose=require("mongoose")
const storySchema=new mongoose.Schema({
    heading: String,
    noti: String,
    story: [
      {
        head: String,
        content: String,
        _id: false  // <-- Prevents auto-generation of _id for subdocuments
      }
    ],
    createdAt:{
      type:Date,
      default:()=> new Date(),
    },
    expiresAt: {
      type: Date,
      default: null, // Only set if expiry is enabled
      
    },
    Expiry:{
      type:Boolean,
    }

});
storySchema.pre("save", function (next) {
  if (this.Expiry) {
    this.expiresAt = new Date(Date.now() + 86400 * 1000); // Expire after 1 day
  } else {
    this.expiresAt = null; // No expiration
  }
  next();
});
storySchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // delete documents after expiration

module.exports=mongoose.model("Story",storySchema);