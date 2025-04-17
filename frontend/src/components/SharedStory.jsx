import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SharedStory = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/topics/getSharedStory/${storyId}`,{},{withCredentials:true});
       
        let data = await response.json(); console.log(data)
        setStory(data.story);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, [storyId]);

  if (loading) {
    return <div className="d-flex justify-content-center my-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (!story) {
    return <p className="text-center text-danger">Story not found</p>;
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
              <h2 className="card-title text-primary fw-bold mb-4 mt-1 display-5">{story.heading}</h2>
              <div className="story-sections">
                {story.story.map((section, index) => (
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
                <Link 
                  to="/dashboard" 
                  className="btn btn-outline-secondary mb-3 "
                >
                  <i className="bi bi-arrow-left me-2"></i> Go to Dashboard
                </Link>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SharedStory;