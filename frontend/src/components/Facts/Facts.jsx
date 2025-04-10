import axios from "axios";
axios.defaults.withCredentials = true;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SocialShare from "./SocialShare";

function Facts() {
  const { topic } = useParams();
  const [facts, setFacts] = useState(null);
  const [error, setError] = useState(null);
  const [newFact, setNewFact] = useState(true);
  const [loading, setLoading] = useState(false);
  const [share, setShare] = useState(false);
  const [savedStoryMessage, setSavedStoryMessage] = useState(false);

  const handleNewFactRequest = () => {
    setLoading(true);
    setNewFact((prev) => !prev);
  };

  const handleSaveStory = async () => {
   
    try {
      const response = await axios.post("http://localhost:8085/topics/fact/save", {
        facts,
      });
      if (response.status === 200) {
        setSavedStoryMessage(true);
        // Hide the message after 3 seconds
        setTimeout(() => setSavedStoryMessage(false), 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8085/topics/learn/facts/`, { params: { topic } }
        );
        setFacts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(err);
        setLoading(false);
      }
    };

    fetchFacts();
  }, [newFact]);

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5 shadow-sm">
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
    <div className="facts-container bg-light">
      {/* Fixed header */}
      <div
        className="position-fixed top-0 w-100 bg-white shadow-sm start-0 py-3"
        style={{ zIndex: 1050 }}
      >
        <div className="container d-flex justify-content-between ">
          <Link
            to="/dashboard"
            className="btn btn-outline-primary rounded-pill"
          >
            <i className="bi bi-arrow-left "></i>Back
          </Link>
          <h1 className="text-primary m-0 fs-4 fw-bold">{`Stories from ${topic}`}</h1>
          <div></div>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-5 mt-5">
        <div className="card shadow border-0 rounded-lg overflow-hidden">
          <div className="card-body p-0">
            {/* Carousel */}
            <div className="text-center">
              <img
                src="/Topic images/mahabharata.jpg"
                className="img-fluid"
                alt="Mahabharata"
                style={{ objectFit: "cover", width: "100%", height: "450px" }}
              />
            </div>

            {/* Story Content */}
            <div className="p-4 p-lg-5">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="display-6 text-primary fw-bold mb-4">
                    {facts.heading}
                  </h2>

                  {facts.story.map((section, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 border-start border-4 border-primary bg-white shadow-sm rounded"
                    >
                      <h5 className="text-primary fw-bold mb-3">
                        {section.head}
                      </h5>
                      <p className="mb-0 fs-5 text-secondary">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  {/* Action buttons */}
                  <div className="d-flex align-items-center mt-5 justify-content-between">
                    <div>
                      <button
                        className="btn btn-primary me-2 rounded-pill px-4"
                        onClick={handleNewFactRequest}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </>
                        ) : (
                          <>New Story</>
                        )}
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-pill px-4"
                        onClick={() => setShare((prev) => !prev)}
                      >
                        <i className="bi bi-share me-2"></i>Share
                      </button>
                    </div>

                    <div className="save-button-container">
                      {savedStoryMessage && (
                        <span className="text-success me-3 ">
                          <i className="bi bi-check-circle-fill me-1"></i> Story
                          saved!
                        </span>
                      )}

                      <button
                        className="btn btn-success btn-lg rounded-circle shadow-sm"
                        onClick={handleSaveStory}
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Save this story"
                      >
                        <i className="bi bi-bookmark-plus"></i>
                      </button>
                    </div>
                  </div>

                  {/* Social share section */}
                  {share && (
                    <SocialShare
                      url={`http://localhost:5173/sharedStory/`}
                      text={`Check out this amazing story from ${topic}: ${facts.heading}`}
                      facts={facts}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;