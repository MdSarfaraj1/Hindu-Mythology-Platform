import React from "react";
import "./UserAccount.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contex/Contex_Api";
import axios from "axios";

function UserAccount() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8085/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null, null); // Clear from context
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="user-account-container d-flex p-4">
      <div className="user-account-navigation">
        <h4>
          <Link to={"/dashboard"} >
            <i
              class="bi bi-arrow-left-square-fill "
              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"
            ></i>
          </Link>
          &nbsp;&nbsp;&nbsp;Settings
        </h4>
        <ul>
          <Link to={"profile"} className="list-group-item">
            <li>Profile</li>
          </Link>
          <Link to={"savedStories"} className="list-group-item">
            <li>Saved Stories</li>
          </Link>
         <Link className="list-group-item" ><li onClick={handleLogout} >Logout</li></Link> 
        </ul>
      </div>

      <div className="user-account-body">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
