import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicChatbot from "../AI_Chatboot/TopicChatbot";

function LearnTopic() {
  const { topic } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function getUserChoice(topic) {
      try {
        const formattedTopic = topic.replace(/\s+/g, '');
        const module = await import("../../assets/TopicDescription");
        setTopicData(module[formattedTopic] || {});
      } catch (error) {
        console.error("Error loading module:", error);
      }
    }
    getUserChoice(topic);
  }, [topic]);

  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  if (!topicData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="learn-container bg-light min-vh-100" id="gotoTop">
      {/* Navigation Breadcrumb */}
      <nav className="breadcrumb-nav container-fluid py-3 bg-white shadow-sm position-fixed top-0" style={{ zIndex: 1000 }}>
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/dashboard" className="text-decoration-none">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active fw-semibold">{topic}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5 mt-5">
        <div className="row g-4">
          {/* Left Sidebar */}
          <div className="col-lg-3">
            <div
              className="bg-white rounded-3 shadow p-4 sticky-top"
              style={{ top: "5rem" }}
            >
              <h3 className="h5 mb-3 border-bottom pb-2">Quick Navigation</h3>
              <div className="list-group list-group-flush">
                <a 
                  href="#overview" 
                  className="list-group-item list-group-item-action border-0 ps-0"
                >
                  <i className="bi bi-book me-2"></i>Overview
                </a>
                {topicData.chapters.map((chapter, index) => (
                  <a
                    href={`#${chapter.name}`}
                    key={index}
                    className="list-group-item list-group-item-action border-0 ps-0"
                  >
                    <i className="bi bi-chevron-right me-1"></i>
                    {chapter.name}
                  </a>
                ))}
                <Link 
                  to={`/learn/facts/${topic}`}
                  className="list-group-item list-group-item-action border-0 ps-0 text-primary"
                >
                  <i className="bi bi-three-dots-vertical me-2"></i>
                  More Stories 
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content Section */}
          <div className="col-lg-9">
            <div className="content-section bg-white rounded-3 shadow p-4 p-lg-5 mb-4">
              <h1 className="display-5 mb-4 fw-bold text-primary">{topic}</h1>

              {/* Definition Section */}
              <div className="mb-5" id="overview">
                <h2 className="h4 text-primary mb-3 border-bottom pb-2">Overview</h2>
                <p className="lead">{topicData.Definition}</p>
              </div>

              {/* Chapter Section */}
              <div className="mb-5">
                <h2 className="h4 text-primary mb-3 border-bottom pb-2">The Story</h2>
                {topicData.chapters.map((chapter, index) => (
                  <div id={`${chapter.name}`} key={index} className="mb-4">
                    <h2 className="h3 mb-3 mt-4">
                      {chapter.name}
                    </h2>
                    <p className="lead text-muted">{chapter.content}</p>
                  </div>
                ))}
                <Link to={`/learn/facts/${topic}`} className="btn btn-outline-primary mt-3">
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  More From {topic}
                </Link>
              </div>
            </div>
            
            {/* Chat Section */}
            <div className="mt-5 pt-3" id="chat-section">
              <div className="bg-white rounded-3 shadow-sm p-4">
                <h3 className="h4 text-primary mb-4 border-bottom pb-2">
                  <i className="bi bi-chat-dots me-2"></i>
                  Chat with AI about {topic}
                </h3>
                <TopicChatbot topic={topic} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating action button */}
      <button 
        onClick={() => scrollToElement(scrollPosition > 300 ? "gotoTop" : "chat-section")}
        className="btn btn-primary rounded-pill shadow position-fixed bottom-0 end-0 m-4 p-2"
        style={{ zIndex: 1000 }}
      >
        {scrollPosition > 300 ? (
          <i className="bi bi-arrow-up fs-7">Goto Top</i>
        ) : (
          <i className="bi bi-chat-dots fs-7">Chat With AI</i>
        )}
      </button>
    </div>
  );
}

export default LearnTopic;