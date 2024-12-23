import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Mahabharata, Pandavas, Kauravas } from "../../assets/TopicDescription";
import "./LearnTopic.css";

function LearnTopic() {
  const { topic } = useParams();
  const topicMap = {
    Mahabharata: Mahabharata,
    Pandavas: Pandavas,
    Kauravas: Kauravas,
  };
  const topicData = topicMap[topic] || { chapters: [] }; 
  return (
    <div className="learn-container">
      {/* Navigation Breadcrumb */}
      <nav className="breadcrumb-nav container py-3">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">{topic}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-3 ms-0 ">
            <div
              className="bg-white rounded-3 shadow-sm p-4 sticky-top "
              style={{ top: "2rem" }}
            >
              <h3 className="h5 mb-3">Quick Navigation</h3>
              <div className="list-group">
                <a href="#overview" className="list-group-item ">
                  <i className="bi bi-book me-2"></i>Overview
                </a>
                <a href="#story" className="list-group-item ">
                  <i className="bi bi-journal-text me-2"></i>The Story
                </a>
                {topicData.chapters.map((chapter, index) => (
                  <a
                    href={`#${chapter.name}`}
                    key={index}
                    className="list-group-item"
                  >
                    {chapter.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/**Right section */}
          <div className="col-lg-7">
            <div className="content-section bg-white rounded-3 shadow-sm p-4 mb-4">
              <h1 className="display-5 mb-4">{topic}</h1>

              {/* Definition Section */}
              <div className="mb-5" id="overview">
                <h2 className="h4 text-primary mb-3">Overview</h2>
                <p className="lead text-muted">{topicData.Definition}</p>
              </div>

              {/* chapter Section */}
              <div className="mb-5">
                <h2 className="h4 text-primary mb-3">The Story</h2>
                {topicData.chapters.map((chapter, index) => (
                  <div id={`${chapter.name}`}>
                    <h2 key={index} className="mb-3">
                      {chapter.name}
                    </h2>
                    <p className="lead text-muted">{chapter.content}</p>
                  </div>
                ))}
                <Link to={`/learn/facts/${topic}`}>
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  More Stories From {topic}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            {/* Image Section in Sidebar */}
            <div className="mt-4">
              <h3 className="h5 mb-3">Related Images</h3>
              <div className="d-flex flex-column gap-3">
                {topicData.images.map((image, index) => (
                  <img
                    src={image.src}
                    alt={image.alt || "Topic Image"}
                    key={index}
                    className="img-fluid rounded shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnTopic;
