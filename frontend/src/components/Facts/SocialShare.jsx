import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SocialShare({ url, text, facts }) {
  const [shareUrl, setShareUrl] = useState(url);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!facts) return; 

    const handleSaveStory = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post("http://localhost:8085/topics/fact/save", {
          facts,
          Expiry: true
        });

        if (response.status === 200) {
          const newUrl = url + response.data.id;
          setShareUrl(newUrl);
        }
      } catch (err) {
        console.error("Error saving story:", err);
        setError("Failed to create sharing link");
      } finally {
        setIsLoading(false);
      }
    };

    handleSaveStory();
  }, [facts, url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(text);

  if (error) {
    return (
      <div className="alert alert-danger">
        <i className="bi bi-exclamation-triangle me-2"></i>
        {error}
      </div>
    );
  }

  return (
    <div >
          <div className="d-flex justify-content-center flex-wrap gap-2 my-3">
            {/* Facebook Share Button */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              title="Share on Facebook"
              className="btn btn-outline-dark"
              aria-label="Share on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
              <span className="ms-2 d-none d-md-inline">Facebook</span>
            </a>

            {/* Twitter Share Button */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
              title="Share on Twitter"
              className="btn btn-outline-dark "
              aria-label="Share on Twitter"
            >
              <i className="bi bi-twitter"></i>
              <span className="ms-2 d-none d-md-inline">Twitter</span>
            </a>

            {/* WhatsApp Share Button */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
              title="Share on WhatsApp"
              className="btn btn-outline-dark"
              aria-label="Share on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <span className="ms-2 d-none d-md-inline">WhatsApp</span>
            </a>

            {/* LinkedIn Share Button */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedText}`}
              title="Share on LinkedIn"
              className="btn btn-outline-dark "
              aria-label="Share on LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
              <span className="ms-2 d-none d-md-inline">LinkedIn</span>
            </a>

          </div>
    </div>
  );
}

export default SocialShare;