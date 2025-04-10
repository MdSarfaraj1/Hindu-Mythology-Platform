import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/forget-password`, { email });
      setMessage({ text: response.data.message, type: "success" });
      setStep(2);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Failed to send OTP",
        type: "error"
      });
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/forget-password/verify-otp`, { email, otp });
      setMessage({ text: response.data.message, type: "success" });
      setStep(3);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Invalid OTP",
        type: "error"
      });
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/set-new-password`, {
        email,
        otp,
        newPassword
      });
      setMessage({ text:  response.data.message, type: "success" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Password reset failed",
        type: "error"
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <input
                type="email"
                className="form-control text-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                backgroundColor: "#00ffff",
                color: "#000",
                border: "none",
              }}
            >
              Send OTP
            </button>
          </form>
        );

      case 2:
        return (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control text-black"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                backgroundColor: "#00ffff",
                color: "#000",
                border: "none",
              }}
            >
              Verify OTP
            </button>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4">
              <input
                type="password"
                className="form-control text-black"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                backgroundColor: "#00ffff",
                color: "#000",
                border: "none",
              }}
            >
              Reset Password
            </button>
          </form>
        );
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.8)), url("Designer.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div
              className="card border-0 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="text-white mb-2">Reset Password</h2>
                  <p className="text-white-50">
                    {step === 1 && "Enter your email to receive OTP"}
                    {step === 2 && "Enter the OTP sent to your email"}
                    {step === 3 && "Enter your new password"}
                  </p>
                </div>

                {message.text && (
                  <div
                    className={`alert ${
                      message.type === "success" ? "alert-success" : "alert-danger"
                    } mb-3`}
                  >
                    {message.text}
                  </div>
                )}

                {renderStep()}

                <div className="text-center text-white-50">
                  Remember your password?{" "}
                  <Link to="/login" className="text-info">
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;