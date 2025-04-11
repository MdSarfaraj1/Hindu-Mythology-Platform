import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Contex/Contex_Api";
import SocialShare from "../Facts/SocialShare";

function SavedStories() {
  let { userID } = useAuth();
  const [Stories, setStories] = useState(null);
  let [isStoryClicked, setIsStoryClicked] = useState(null);
  const handleDelete = (storyID) => {
    const deleteStory = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/user/stories/delete`,
          { storyID ,userID},
          {
            withCredentials: true,
          }
        );
        setStories((prevStories) => prevStories.filter(story => story.id !== storyID));
      } catch (error) {
        console.log(error);
      }
    };
    deleteStory();
  };
  const fetchStories = async () => {
    try {
      let response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/user/stories?userID=${userID}`,
        {
          withCredentials: true,
        }
      );
      setStories(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "500px", overflowY: "auto" }}
    >
      <h2 className="text-dark">Saved Stories</h2>
      <div className="accordion " id="accordionStory">
        {Stories ? (
          Stories.map((obj, index) => (
            <div className="accordion-item rounded-3  mb-3" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed  fw-bold "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded={isStoryClicked === index}
                  aria-controls={`flush-collapse${index}`}
                  onClick={() =>
                    setIsStoryClicked(isStoryClicked === index ? null : index)
                  }
                >
                  {obj.heading}
                  {isStoryClicked === index && (
                    <i
                      onClick={() => handleDelete(obj.id)}
                      className="fa-solid fa-trash ms-5 link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    ></i>
                  )}
                </button>
              </h2>
              {isStoryClicked === index && 
              <SocialShare 
              url={`${import.meta.env.VITE_APP_FRONTEND_URL}/sharedStory/${obj.id}`}
              text={`Check out this amazing story about  ${obj.heading}`} 
              facts={""}/>}
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionStory"
              >
                <div
                  className="accordion-body"
                  style={{
                    overflowY: "auto",
                    padding: "15px",
                  }}
                >
                  {obj.story.map((innerobj, i) => (
                    <div key={i} className="mb-3">
                      <h3 className="fw-semibold">{innerobj.head}</h3>
                      <p className="text-muted">{innerobj.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>Loading Stories...</h3>
        )}
      </div>
    </div>
  );
}

export default SavedStories;
