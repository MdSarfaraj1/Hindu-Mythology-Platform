import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  denied_Notification_Permission,
  request_Notification_Permission,
} from "../../Generate_Token";
const SelectedTopics = ({ userID }) => {
  const [userTopics, setUserTopics] = useState([]);
  const [isInterested, setIsInterested] = useState(false);

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
    const checked = event.target.checked;
    if (checked) {
    
      request_Notification_Permission(userID);
      setIsInterested(true);
    } else {
     
      denied_Notification_Permission(userID);
      setIsInterested(false);
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
      <button className="btn btn-outline-success mt-5">
         <div class="form-check form-switch  ">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isInterested}
          onChange={handleCheckboxChange}
        />
        <label class="form-check-label" for="flexSwitchCheckChecked">
        Interested in receiving notifications
        </label>
      </div>
      </button>
     
    </div>
  );
};

export default SelectedTopics;
