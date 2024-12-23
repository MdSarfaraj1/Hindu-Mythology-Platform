import { forwardRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Contex/Contex_Api";

function Signup() {
  const {setUserID}=useAuth()
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' }); // Reset message

    try {
      const response = await axios.post("http://localhost:8085/user/signup", formData);
      
      if (response.status === 201) {
        setMessage({ 
          text: response.data.message,
          type: 'success' 
        });
        setTimeout(() => {
          setUserID(response.data.userID)
          navigate(`/dashboard`);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 409:
            setMessage({ 
              text: error.response.data.message, 
              type: 'error' 
            });
            break;
          default:
            setMessage({ 
              text: error.response.data.message || 'Something went wrong. Please try again later.',
              type: 'error' 
            });
        }
      } else {
        setMessage({ 
          text: 'Network error. Please check your connection.',
          type: 'error' 
        });
      }
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
                      {" "}
                      Please choose a username.{" "}
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      className="form-control  text-black"
                      placeholder="Email Address"
                      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      value={formData.email}
                      required
                    />
                  </div>

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
