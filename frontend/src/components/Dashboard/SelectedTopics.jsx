import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contex/Contex_Api";
import {
  denied_Notification_Permission,
  request_Notification_Permission,
} from "../../Generate_Token";
const SelectedTopics = ({ userID }) => {
  const [userTopics, setUserTopics] = useState([]);
  const [isInterested, setIsInterested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const {setFlashMessage} = useAuth()
  useEffect(() => {
    const fetchUserTopics = async () => {
      if (userID) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_APP_BACKEND_URL}/topics/retrieve-user-topics`,
            {
              withCredentials: true,
            }
          );
          setUserTopics(response.data.topics);
          setIsInterested(response.data.Notification_Status);
        } catch (error) {
          console.error("Error fetching topics:", error.response.data.message);
        }
      }
    };

    fetchUserTopics();
  }, [userTopics]);
  const handleCheckboxChange = async (event) => {
    setIsLoading(true);
    const checked = event.target.checked;
    if (checked) {
      request_Notification_Permission(userID);
      setIsInterested(true);
      setIsLoading(false);
      setFlashMessage("Notification permission granted. You will receive notifications.");
    } else {
     
      denied_Notification_Permission(userID);
      setIsInterested(false);
      setIsLoading(false);
      setFlashMessage("Notification permission denied. You will not receive notifications.");
    }
  };



  return (
    <div className="container py-4">
      <div className="d-flex align-items-center gap-3 mb-4">
        <h2 className="display-6 fw-bold m-0">Your Feed</h2>
        <span className="badge bg-primary rounded-pill fs-6">
          {userTopics.length} Topics
        </span>
      </div>

      {userTopics.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {userTopics.map((topic, index) => (
            <div key={index} className="col">
              <Link
                to={`/learn/${topic.name}`}
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm hover-card">
                  <div className="card-img-overlay-wrapper">
                    <img
                      className="card-img-top"
                      src={topic.image}
                      alt={topic.name}
                    />
                
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{topic.name}</h5>
                    <p className="card-text text-muted">{topic.description}</p> 
                  </div>
                 
                </div> 
               
              </Link>
             
            </div>
          ))}
        </div>
      ) : (
        <div>No topics selected yet</div>
      )}
<div className="position-fixed z-3 bottom-0  end-0 mb-3 me-5">
    <div className="d-flex align-items-center gap-2 bg-light p-2 rounded shadow">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isInterested}
          onChange={handleCheckboxChange}
          disabled={isLoading}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckChecked"
        >
          {isInterested ? "Notifications Enabled" : "Enable Notifications"}
        </label>
      </div>

      {isLoading && (
        <div className="spinner-border spinner-border-sm text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>

     
</div>
    </div>
  );
};

export default SelectedTopics;
