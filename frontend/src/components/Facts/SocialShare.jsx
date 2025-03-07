import React from "react";

function SocialShare({ url, text }) {
  const encodedUrl = encodeURIComponent(url);
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
