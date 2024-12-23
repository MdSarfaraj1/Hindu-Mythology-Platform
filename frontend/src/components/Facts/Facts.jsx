import axios from "axios";
axios.defaults.withCredentials = true;
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./Facts.css"; // Import your custom CSS file

function Facts() {
  const { topic } = useParams();
  const [facts, setFacts] = useState(null);
  const [error, setError] = useState(null);
  const [neew, setNew] = useState(true);
  const [loading,setLoading]=useState(false);
  const handleNewFactRequest = () => {
    setLoading(true);
    setNew((prev) => !prev);
  };
  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8085/topics/learn/facts/${topic}`
        );
        setFacts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    };

    fetchFacts();
  }, [neew]);
  
  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!facts) {
    return (
        <div className="d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </button></div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Facts about {topic}</h1>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-primary">{facts.heading}</h2>
          <p className="card-text">{facts.story}</p>
          <button
            className="btn btn-outline-primary"
            onClick={handleNewFactRequest}
          >
            {loading?"Loading...":"New One"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Facts;
