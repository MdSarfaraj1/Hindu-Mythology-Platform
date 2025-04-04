const express=require("express");
const router=express.Router({mergeParams:true});
const ResetPassword=require("../Controllers/ResetPassword")

router.post("/",ResetPassword.SendOTP);
router.post("/verify-otp", ResetPassword.VerifyOTP);
router.post("/set-new-password", ResetPassword.SetNewPassword);

module.exports=router;