import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contex/Contex_Api";

function Preferences() {
  const { userID } = useAuth();
  const [preferences, setPreferences] = useState({
    storyLanguage: "English",
    selectedTopics: ["j", "j", "k"],
    notification: false,
  });

  const [isEditingLanguage, setIsEditingLanguage] = useState(false);
  const [isEditingTopics, setIsEditingTopics] = useState(false);
  const [newLanguage, setNewLanguage] = useState(preferences.storyLanguage);
  const [newTopics, setNewTopics] = useState(preferences.selectedTopics.join(", "));

  const handleLanguageChange = () => {
    setPreferences((prev) => ({ ...prev, storyLanguage: newLanguage }));
    setIsEditingLanguage(false);
  };

  const handleTopicsChange = () => {
    setPreferences((prev) => ({ ...prev, selectedTopics: newTopics.split(", ") }));
    setIsEditingTopics(false);
  };

  return (
    <>
      <h2>Preferences</h2>
      <p>
        Willing to get new Stories as Notifications:{" "}
        {preferences.notification ? "Enabled" : "Disabled"}
      </p>
      <div>
        <h5>Selected Topics</h5>
        {isEditingTopics ? (
          <>
            <input
              type="text"
              value={newTopics}
              onChange={(e) => setNewTopics(e.target.value)}
            />
            <button onClick={handleTopicsChange}>Save Topics</button>
          </>
        ) : (
          <>
            {preferences.selectedTopics.map((topic) => (
              <p key={topic}>{topic}</p>
            ))}
            <button onClick={() => setIsEditingTopics(true)}>Edit Topics</button>
          </>
        )}
      </div>
      <div>
        <p>Story Language: {preferences.storyLanguage}</p>
        {isEditingLanguage ? (
          <>
            <input
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
            />
            <button onClick={handleLanguageChange}>Save Language</button>
          </>
        ) : (
          <button onClick={() => setIsEditingLanguage(true)}>Edit Language</button>
        )}
      </div>
      <div>
        <p>
          Willing to get new Stories as Notifications:{" "}
          {preferences.notification ? "Enabled" : "Disabled"}
        </p>
        <button onClick={() => setPreferences((prev) => ({ ...prev, notification: !prev.notification }))}>
          Toggle Notifications
        </button>
      </div>
    </>
  );
}

export default Preferences;
