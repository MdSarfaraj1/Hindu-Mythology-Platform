import { useState } from "react";
import validator from 'validator';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Contex/Contex_Api";
import { GoogleLogin } from '@react-oauth/google';

function Signup() {
  const { setUser } = useAuth()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "",email: "",password: ""});
  const [otpSent, setOtpSent] = useState(false);
const [serverOtp, setServerOtp] = useState(""); 
const [enteredOtp, setEnteredOtp] = useState("");
const [emailVerified, setEmailVerified] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });


  const handleEmailVErification=async () => {
    if (!validator.isEmail(formData.email)) {
      setMessage({ text: "Please enter a valid email", type: "error" });
      return;
    }

    try {
      setOtpSent(true);
      const res = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/verify-email`, {
        email: formData.email,
      },{ withCredentials: true });
      
      setServerOtp(res.data.OTP); // Save OTP returned from backend
      setMessage({ text: "OTP sent to your email", type: "success" });
    } catch (err) {
      setOtpSent(false)
      setMessage({ text: "Failed to send OTP", type: "error" });
    }
  }
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username||!formData.password||!formData.email)
    {
      setMessage({ text: 'Please Provide all details', type: '' })
      return
    }
    if(!emailVerified)
    {setMessage({ text: 'Please Verify the email first', type: '' })
     return}
    setMessage({ text: '', type: '' }); // Reset message

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/signup`, formData,{ withCredentials: true });

      if (response.status === 201) {
        setMessage({
          text: response.data.message,
          type: 'success'
        });
        setTimeout(() => {
          setUser(response.data.userID, response.data.username)
          navigate(`/dashboard`);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setMessage({
              text: error.response.data.message|| 'Something went wrong. Please try again later.',
              type: 'error'
            });
        }
       else {
        setMessage({
          text: 'Network error. Please check your connection.',
          type: 'error'
        });
      }
    }
  };

// Handle Google signup success
const handleGoogleSuccess = async (credentialResponse) => {
  try {
    // Send the credential to your backend
    const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/google-signup`, {
      credential: credentialResponse.credential
    }, {
      withCredentials: true
    });

    setMessage({
      text: response.data.message || "Signup successful",
      type: "success",
    });
    
    setUser(response.data.userID, response.data.username, response.data.profilePicture);
    setTimeout(() => {
      navigate(`/dashboard`);
    }, 1000);
  } catch (error) {
    setMessage({
      text: error.response?.data?.message || "Failed to signup with Google",
      type: "error",
    });
  }
};

// Handle Google login failure
const handleGoogleFailure = () => {
  setMessage({
    text: "Google signup failed. Please try again.",
    type: "error",
  });
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
          <div className="col-md-6 col-lg-5">
            <div
              className="card border-0 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="card-body p-5">
                <h2 className="text-center text-white mb-4">Create Account</h2>
                {message.text && (
                  <div
                    className={`alert ${
                      message.type === "success"
                        ? "alert-success"
                        : "alert-danger"
                    } mb-3`}
                  >
                    {message.text}
                  </div>
                )}
                {/* Google Sign-up Button */}
                <div className="d-flex justify-content-center mb-4">
                  <div className="position-relative">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={handleGoogleFailure}
                      useOneTap
                      theme="filled_blue"
                      text="signup_with"
                      shape="rectangular"
                    />
                  </div>
                </div>
                
                <div className="text-center text-white-50 mb-4">Or sign up with email</div>
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  <div className="mb-3">
                    <input
                      name="username"
                      onChange={handleInputChange}
                      type="text"
                      className="form-control  text-black"
                      placeholder="Full Name"
                      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      value={formData.username}
                      required
                    />
                    <div className="valid-feedback">username looks good</div>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                      name="email"
                      type="email"
                      className="form-control text-black"
                      placeholder="Email Address"
                      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      value={formData.email}
                      required
                      disabled={emailVerified}
                    />
                    {!otpSent && <button
                      type="button"
                      className="btn btn-sm btn-outline-info"
                      onClick={handleEmailVErification}
                      disabled={emailVerified}
                    >
                      {emailVerified ? "Verified" : "Verify"}
                    </button>}
                  </div> 
                   

                  {otpSent && !emailVerified && (
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="form-control text-black"
                        value={enteredOtp}
                        onChange={(e) => setEnteredOtp(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-success btn-sm mt-2"
                        onClick={() => {
                          if (enteredOtp === serverOtp) {
                            setEmailVerified(true);
                            setOtpSent(false)
                            setMessage({
                              text: "Email verified successfully!",
                              type: "success",
                            });
                          } else {
                            setMessage({ text: "Invalid OTP", type: "error" });
                          }
                        }}
                      >
                        Submit OTP
                      </button>
                    </div>
                  )}
                  <div className="mb-4">
                    <input
                      onChange={handleInputChange}
                      name="password"
                      type="password"
                      className="form-control  text-black"
                      placeholder="Password"
                      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      value={formData.password}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    style={{
                      backgroundColor: "#00ffff",
                      color: "#000",
                      border: "none",
                    }}
                  >
                    Sign Up
                  </button>

                  <div className="text-center text-white-50">
                    Already have an account?{" "}
                    <Link to="/login" className="text-info">
                      Login here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
