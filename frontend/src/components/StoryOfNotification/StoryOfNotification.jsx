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
 
  const handleSaveStory = async() => {
    setSavingStory(true);
    try {
      const response = await axios.post("http://localhost:8085/topics/fact/save", {
        facts,
      });
      if (response.status == 200) 
        setSavedStoryMassege(true);
    } catch (err) {
      console.log(err);
    }
    setSavingStory(false);
  };
  useEffect(() => {
    const fetchNotificationStory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8085/topics/learn/NotificationStory`,
          { params: { StoryId } }
        );
        setFacts(response.data);
      } catch (err) {
        if (err.response) {
          // Server responded with a status outside 2xx range
          console.error("Error Response:", err.response.data);
          setError(err.response.data.message); // Display error message from backend
        }
        else {
        console.log(err);}
      }
    };
  
    fetchNotificationStory();
  }, []);
 

  if (error) {
    return (
      <div className="alert alert-danger text-center my-4">
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
      <div className="card shadow-lg border-0 rounded ">
        <div className="card-body mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Carousel */}
              <div
                id="carouselExampleCaptions"
                className="carousel slide mb-4  "
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/Topic images/puranas.jpg"
                      className="d-block w-100 rounded"
                      alt="Puranas"
                      style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Topic images/mahabharata.jpg"
                      className="d-block w-100 rounded"
                      alt="Mahabharata"
                      style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Topic images/ramayana.jpg"
                      className="d-block w-100 rounded"
                      alt="Ramayana"
                      style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Facts */}
              <h2 className="card-title text-primary">{facts.heading}</h2>
              {facts.story.map((section, index) => (
                <div
                  key={index}
                  className="mb-4 p-3 border rounded bg-light shadow-sm"
                >
                  <h5 className="text-secondary">{section.head}</h5>
                  <p>{section.content}</p>
                </div>
              ))}
              {/* Share and Save */}
              <button
                className="btn btn-outline-primary mt-3 ms-2"
                onClick={() => setShare((prev) => !prev)}
              >
                Share <i class="bi bi-share"></i>
              </button>
              {savingStory ?  (
                <div class="spinner-grow text-success ms-5 mt-5" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> 
              ):(
                <div
                  className="ms-5 mt-5 rounded-circle btn btn-success  d-inline p-2 "
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Tooltip on top"
                  onClick={handleSaveStory}
                >
                  <i class="bi bi-floppy "></i>
                </div>
              ) }
              {share && (
                <SocialShare
                  url={window.location.href}
                  text={`Check out this amazing stoty from  Hindu Mythology:  ${facts.heading}`}
                />
              )}
            
                <Link to={"/dashboard"} className="ms-5">Go to Dashboard </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default StoryOfNotification;