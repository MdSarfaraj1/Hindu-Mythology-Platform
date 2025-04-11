import axios from "axios";
axios.defaults.withCredentials = true;
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SocialShare from "../Facts/SocialShare";

function StoryOfNotification() {
  const [searchParams] = useSearchParams();
  const StoryId = searchParams.get("StoryId"); 
  const [facts, setFacts] = useState(null);
  const [error, setError] = useState(null);
  const [share, setShare] = useState(false);
  const [savingStory, setSavingStory] = useState(false);
  const [savedStoryMessage, setSavedStoryMessage] = useState(false);

  const handleSaveStory = async() => {
    setSavingStory(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/topics/fact/save`, {
        facts,
      });
      if (response.status === 200) {
        setSavedStoryMessage(true);
        setTimeout(() => setSavedStoryMessage(false), 3000); // Hide message after 3 seconds
      }
    } catch (err) {
      console.log(err);
    }
    setSavingStory(false);
  }; 

  useEffect(() => {
    const fetchNotificationStory = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/topics/learn/NotificationStory`,
          { params: { StoryId } }
        );
        setFacts(response.data);
      } catch (err) {
        if (err.response) {
          console.error("Error Response:", err.response.data);
          setError(err.response.data.message);
        }
        else {
          console.log(err);
        }
      }
    };
  
    fetchNotificationStory();
  }, [StoryId]);

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5 shadow-sm rounded-3 mx-auto" style={{ maxWidth: "800px" }}>
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!facts) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-body mt-4 px-md-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
            <div >
              <img
                src="/Topic images/mahabharata.jpg"
                className="img-fluid"
                alt="Mahabharata"
                style={{ objectFit: "cover", width: "100%", height: "450px" }}
              />
            </div>
              <h2 className="card-title text-primary fw-bold mb-4 mt-1 display-5">{facts.heading}</h2>
              <div className="story-sections">
                {facts.story.map((section, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 border-0 rounded-3 bg-light shadow-sm"
                    style={{ 
                      transition: "transform 0.3s ease", 
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 1
                    }}
                    onMouseOver={(e) => {e.currentTarget.style.transform = "translateY(-5px)"}}
                    onMouseOut={(e) => {e.currentTarget.style.transform = "translateY(0)"}}
                  >
                    <h5 className="text-secondary fw-bold mb-3">{section.head}</h5>
                    <p className="mb-0 text-dark">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center mt-4 flex-wrap">
                <button
                  className="btn btn-primary me-3 mb-3 "
                  onClick={() => setShare((prev) => !prev)}
                >
                  <i className="bi bi-share-fill me-2"></i> Share
                </button>
                
                <button
                  className="btn btn-success me-3 mb-3 d-flex align-items-center"
                  onClick={handleSaveStory}
                  disabled={savingStory}
                > <i className="bi bi-bookmark-fill me-2"></i> Save Story</button>
                
                <Link 
                  to="/dashboard" 
                  className="btn btn-outline-secondary mb-3 "
                >
                  <i className="bi bi-arrow-left me-2"></i> Go to Dashboard
                </Link>

                {/* Save confirmation message */}
                {savedStoryMessage && (
                  <div className="ms-3 alert alert-success mb-3 py-2 px-3 d-inline-block">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Story saved successfully!
                  </div>
                )}
              </div>

              {/* Social Share Component */}
              {share && (
                <div className="mt-4 p-3 bg-light rounded-3 shadow-sm border">
                  <h6 className="mb-3">Share this story:</h6>
                  <SocialShare
                    url={window.location.href}
                    text={`Check out this amazing story from Hindu Mythology: ${facts.heading}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryOfNotification;