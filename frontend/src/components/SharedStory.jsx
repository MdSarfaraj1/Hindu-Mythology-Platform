import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SharedStory = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/topics/getSharedStory/${storyId}`);
       
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
    <h1 className="text-center display-4 text-primary mb-4">Stories from </h1>
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
            <h2 className="card-title text-primary">{story.heading}</h2>
            {story.story.map((section, index) => (
              <div
                key={index}
                className="mb-4 p-3 border rounded bg-light shadow-sm"
              >
                <h5 className="text-secondary">{section.head}</h5>
                <p>{section.content}</p>
              </div>
            ))}
          <Link to={"/"}>Explore our website</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default SharedStory;