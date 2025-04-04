import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contex/Contex_Api";
import SelectTopicsFromAll from "./SelectTopicsFromAll";

const AllTopics = () => {
  const navigate = useNavigate();
  const {userID ,setFlashMessage}=useAuth();
  const [selectedTopics, setSelectedTopics] = useState([]);//for marking already selected topic and adding new ones
  const [topic, setTopics] = useState([]);// al topics
  const [searchTerm, setSearchTerm] = useState("");// for search box
  const [FilterTopics, setFilterTopics] = useState([]);
  const [filteredCategoryTopics, setFilteredCategoryTopics] = useState([]);
  const [Categories, setCategory] = useState([
    "Sacred Texts",
    "Ramayana Characters",
    "Mahabharata Characters",
    "Puranic Characters",
    "Concepts",
    "Sacred Places",
    "Epics",
    "Purana",
    "Meditation",
    "Deities",
    "Philoshophy",
    "Festivals",
    "Temples",
    "Sages",
  ]);
  useEffect(() => {  // retrieving all topic
    axios
      .get("http://localhost:8085/topics/retrieve_All_topics")
      .then((response) => {
        setTopics(response.data.topic);
      });
  }, []);
  useEffect(() => {  // retrieving user topics
    const fetchUserTopics = async () => {
      if (userID) {
        try {
          const response = await axios.get(
            "http://localhost:8085/topics/retrieve-user-topics",
            {
              withCredentials: true,
            }
          );
          setSelectedTopics(response.data.topics.map(topic => topic.name));

        } catch (error) {
          console.error("Error fetching topics:", error.response.data.message);
        }
      }
    };

    fetchUserTopics();
  },[userID]);

  //submitting topics to server
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
        setFlashMessage("Topic Updated Succesfully")
        navigate("/dashboard")
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error saving your topics. Please try again.");
      }
    } else {
      alert("Please select at least one topic to continue");
    }
  };
  //handling Selection,deselction of category into category window
  const handleFilterChoice = (instruction, c) => {
    if (instruction === "add") {
      setFilterTopics((prev) => [...prev, c]);
      setCategory((prev) => prev.filter((t) => t !== c));
    } else {
      setCategory((prev) => [...prev, c]);
      setFilterTopics((prev) => prev.filter((t) => t !== c));
    }
  };

  const handleCategorySearch = () => {
    setFilteredCategoryTopics(topic.filter((t) => t.category.some((cat) => FilterTopics.includes(cat))))
  };
  //handling user choice of topics to submit
  const handleTopicChange = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

 // for search box and filteration
  const filteredTopics = (FilterTopics.length > 0 ? filteredCategoryTopics : topic)
  .filter((t) => t.name.toLowerCase().includes(searchTerm.toLowerCase()));
 
  return (
    <div className="topics-container">
      <div // for header
        style={{
          padding: "20px",
          background: "#f8f9fa",
          borderBottom: "1px solid #10429f",
          position: "sticky",
          top: 0,
          zIndex: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>All topics</h1>
        <input
          type="text"
          className="form-control "
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            maxWidth: "250px",
            maxHeight: "40px",
          }}
        />
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-light dropdown-toggle fs-5 d-flex align-items-center"
            data-bs-toggle="dropdown"
            style={{
              borderRadius: "8px",
              padding: "10px 18px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              border: "1px solid #dee2e6",
          
            }}
          >
            <i className="bi bi-grid-3x3-gap-fill me-2"></i>
            Categories
          </button>

          <ul
            className="dropdown-menu shadow p-2 "
            style={{ minWidth: "300px" }}
          >
            {Categories.map((c, index) => (
              <li
                key={index}
                className="px-3 py-2 "
                style={{
                  transition: "background-color 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation(); //stop bubling up
                  handleFilterChoice("add", c);}}
              >
                <h6 className="mb-0">{c}</h6>
              </li>
            ))}

           

            <div className="px-3 d-flex flex-wrap gap-2">
              {FilterTopics.map((c, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-sm btn-primary position-relative px-3 py-1 d-flex align-items-"
                  onClick={(e) => {e.stopPropagation();handleFilterChoice("remove", c)}}
                >
                  {c}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    x
                  </span>
                </button>
              ))}
              {FilterTopics.length!=0 && 
              <button className="btn btn-success" onClick={handleCategorySearch}>
                Search
              </button>
              }
            </div>
          </ul>
        </div>
      </div>

      {/* Topics */}
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
          margin: " auto",
          maxWidth: "1100px",
        }}
      >
        {filteredTopics.map((topic, index) => (
          <div key={index}>
            <SelectTopicsFromAll
              topic={topic}
              isSelected={selectedTopics.includes(topic.name)} //using some as includes only work
              onChange={() => handleTopicChange(topic.name)}
            />
          </div>
        ))}
      </div>

      {/* Fixed Bottom Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 3,
          left: 500,
          padding: "15px",
          background: "#10429f",
          borderRadius: "30px",
        }}
      >
        <button
          className="btn col-1  btn-primary"
          onClick={handleTopicSubmit}
          style={{ minWidth: "120px" }}
        >
          Submit
        </button>
        <button
          className="btn ms-3 btn-secondary"
          onClick={() => navigate("/dashboard")}
          style={{ minWidth: "120px" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AllTopics;
