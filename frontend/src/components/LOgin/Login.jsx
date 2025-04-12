import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contex/Contex_Api";

function Login() {
  const {setUser}=useAuth();
  const navigate=useNavigate();
  const [message, setMessage] = useState({ text: "", type: "" });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = formData;
    setMessage({ text: "", type: "" });
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/login`, loginData, {
        withCredentials: true,
      });
      setMessage({
        text: response.data.message,
        type: "success",
      });
      setUser(response.data.userID,response.data.username);
      setTimeout(() => {
        navigate(`/dashboard`);
      }, 1000);

    } catch (error) {
      if (error.response) {

        setMessage({
          text: error.response.data.message || "An error occurred during login",
          type: "error",
        });
      }
      else {
        setMessage({
          text: "Network error. Please check your connection.",
          type: "error",
        });
      }

    };
  }
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
                    <h2 className="text-white mb-2">Welcome Back</h2>
                    <p className="text-white-50">
                      Login to continue your journey
                    </p>
                  </div>
                  {message.text && (
                    <div
                      className={`alert ${message.type === "success"
                          ? "alert-success"
                          : "alert-danger"
                        } mb-3`}
                    >
                      {message.text}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        className="form-control  text-black"
                        placeholder="Email Address"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        value={formData.password}
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        className="form-control "
                        placeholder="Password"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      />
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="remember"
                          onChange={(e) =>
                            setFormData((prevData) => ({
                              ...prevData,
                              remember: e.target.checked, 
                            }))
                          }
                          name="remember"
                          checked={formData.remember}
                        />
                        <label
                          className="form-check-label text-white-50"
                          htmlFor="remember"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link to="/forget-password" className="text-info">
                        Forgot Password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-3"
                    
                    >
                      Login
                    </button>

                    <div className="text-center text-white-50">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-info">
                        Sign up
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

  export default Login;
