import React, { useEffect } from "react";
import {useState} from "react"
import axios from "axios";
function SocialShare({ url, text ,facts}) {
  const [shareurl,seturl]=useState(url)
  useEffect(() => {
    if (!facts) return; // Ensure facts exist before making the request

    const handleSaveStory = async () => {
      try {
        const response = await axios.post("http://localhost:8085/topics/fact/save", {
          facts,
          Expiry:true
        });

        if (response.status === 200) {
          seturl(shareurl + response.data.id);
          console.log("Updated URL:", shareurl); // This will still show old value due to async state update
        }
      } catch (err) {
        console.error("Error saving story:", err);
      }
    };

    handleSaveStory();
  }, [facts]);
  const encodedUrl = encodeURIComponent(shareurl);
  const encodedText = encodeURIComponent(text);

  return (
    <div className="mt-4  ">
      <div className="d-flex justify-content-center rounded-circle mb-3 ">
        {/* Facebook Share Button */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="btn btn-primary mx-2 rounded-circle"
        
        >
          <i className="fab fa-facebook-f "></i> 
        </a>
        {/* Twitter Share Button */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="btn btn-info mx-2  rounded-circle"
         
        >
          <i className="bi bi-twitter " style={{ color: "white" }}></i> 
        </a>
        {/* WhatsApp Share Button */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          title="Watsapp"
          rel="noopener noreferrer"
          className="btn btn-success mx-2   rounded-circle"
          
        >
          <i className="fab fa-whatsapp "></i>
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
