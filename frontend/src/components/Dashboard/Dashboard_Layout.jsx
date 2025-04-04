import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboard.css";
import SelectTopics from "./SelectTopics"; 
import axios from "axios";
import { useAuth } from "../../Contex/Contex_Api";
import SelectedTopics from "./SelectedTopics";

const Dashboard_Layout = () => {
  const navigate = useNavigate();
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const { userID,flashMessage,setFlashMessage } = useAuth();

  const topics = [
    "Vedas",
    "Upanishad",
    "BhagavadGita",
    "Puranas",
    "Mahabharata",
    "Ramayana",
    "TemplesHistory",
    "HinduPhilosophy",
  ];
  const [featuredContent] = useState([
    {
      title: "Vedic Wisdom",
      description: "Ancient knowledge from the sacred texts",
      icon: "bi-book-fill",
      link:"https://bangaloreashram.org/vedic-wisdom/"
    },
    {
      title: "Sacred Rituals",
      description: "Understanding traditional practices",
      icon: "bi-fire",
      link:"https://www.britannica.com/topic/Hinduism/Practice"
    },
    {
      title: "Meditation Guide",
      description: "Path to inner peace and enlightenment",
      icon: "bi-peace",
      link:"https://www.artofliving.org/in-en/meditation-overview"
    },
  ]);

  const handleTopicChange = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleTopicSubmit = async () => {
    if (!userID) {
      alert("please login first");
      return navigate("/login");
    }
    if (selectedTopics.length > 0) {
      try {
        const response = await axios.patch(
          "http://localhost:8085/topics/update-topics",
          { userID, selectedTopics },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setShowTopicModal(false);
        }
        setFlashMessage("Topic Updated Succesfully")
      } catch (error) {
        console.error("Error:", error.response);
        alert(error.response.data.message);
      }
    } else {
      alert("Please select at least one topic to continue");
    }
  };

  return (
    <div className="dashboard-container">
    
      <div className="hero-section position-relative vh-100">
     {/* Flash Message */}
     {flashMessage && (
        <div className="flash-message">
          {flashMessage}
        </div>
      )}
        <div
          className="parallax-bg w-100 h-100"
          style={{
            backgroundImage: 'url("/Dashboard.jpeg")',
            backgroundAttachment: "fixed",

            backgroundSize: "cover",
          }}
        >
          <div className=" position-absolute w-100 h-100">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-6">
                  <h1 className="display-3 text-white fw-bold mb-4">
                    Discover  the Eternal Wisdom of
                    <span className="d-block" style={{ color: "#FF9F43" }}>
                      Sanātana Dharma
                    </span>
                  </h1>
                  {/* popup */}
                  <div className="d-flex gap-3">
                    <button
                      onClick={() => setShowTopicModal(true)}
                      className="btn btn-primary btn-lg rounded-pill"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Tooltip on top"
                    >
                      Select Topics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <div className={`topic-modal ${showTopicModal ? "show" : ""}`} >
        <div className="topic-modal-content" style={{maxWidth:"800px"}}>
          <h2 className="text-white">Select Topics to know about</h2>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <SelectTopics
                key={index}
                topic={topic}
                isSelected={selectedTopics.includes(topic)}
                onChange={() => handleTopicChange(topic)}
              />
            ))}
          </div>

          {/* control buttons*/}
          <div className="modal-buttons">
          <button
              className="btn btn-success"
              onClick={()=>navigate("/allTopics")}
            >
              
              More
            </button>
            <button className="btn btn-primary" onClick={handleTopicSubmit}>
              Submit
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowTopicModal(false)}
            >
              Cancel
            </button>
            
          </div>
        </div>
      </div>

      <SelectedTopics userID={userID} />

      {/* footer of this page */}
      <div className="featured-content py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Begin Your Spiritual Journey</h2>
          <div className="row g-4">
            {featuredContent.map((content, index) => (
              <div key={index} className="col-md-4 ">
                <div className="card h-100 border-0 shadow-sm  hover-card bg-dark-subtle">
                  <div className="card-body text-center  p-4">
                    <i
                      className={`bi ${content.icon} display-4 mb-3 text-primary`}
                    ></i>
                    <h3 className="h4 mb-3">{content.title}</h3>
                    <p className="text-muted">{content.description}</p>
                    <Link
                      to={`${content.link}`}
                      className="btn btn-outline-primary rounded-pill mt-3"
                    >
                      Explore <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Layout;
