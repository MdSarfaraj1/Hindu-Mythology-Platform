import React, { useEffect, useState } from "react";
import axios from "axios" 
import { useAuth }from "../../Contex/Contex_Api"
function Profile() {
    const{userID}=useAuth();
  const [userProfile, setUserProfile] = useState({
    email: "john.doe@example.com",
    username: "johndoe",
    storyLanguage: "English",
  });
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
useEffect(()=>{
    async function fetchData(){
        try{
            let response=await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/profile`,{userID},{withCredentials:true});
            setUserProfile(response.data);
        }catch(error){
            console.error("Profile Fetch error:", error);
        }
    }
    fetchData();
},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
try{
   let response= axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/user/update`,{ userProfile,userID},{withCredentials:true});
   alert("Profile Updated Successfully");
}catch(error){
    console.error("Update error:", error);
}
    console.log("Updated Profile:", userProfile);
    setIsEditing(false);
  };

  return (
    <>
      <h2>Profile</h2>
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="form-container p-4 bg-light rounded shadow"
        >
          <div className="mb-3">
            <label className="form-label text-dark">Username:</label>
            <input
              type="text"
              name="username"
              value={userProfile.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Email:</label>
            <input
              type="email"
              name="email"
              value={userProfile.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">
              Select Story Language:
            </label>
            <select
            value={userProfile.storyLanguage}
              name="storyLanguage"
              onChange={handleChange}
              className="form-select"
              required
            >
                <option value={userProfile.storyLanguage} disabled>{userProfile.storyLanguage}</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="bengali">Bengali</option>
              <option value="telugu">Telugu</option>
              <option value="marathi">Marathi</option>
              <option value="tamil">Tamil</option>
              <option value="urdu">Urdu</option>
              <option value="gujarati">Gujarati</option>
              <option value="kannada">Kannada</option>
              <option value="malayalam">Malayalam</option>
              <option value="odia">Odia</option>
              <option value="punjabi">Punjabi</option>
              <option value="assamese">Assamese</option>
              <option value="nepali">Nepali</option>
              <option value="sindhi">Sindhi</option>
              <option value="kashmiri">Kashmiri</option>
              <option value="bhojpuri">Bhojpuri</option>
              <option value="maithili">Maithili</option>
              <option value="sanskrit">Sanskrit</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ backgroundColor: "#007bff", color: "#fff" }}
          >
            Update Profile
          </button>
        </form>
      ) : (
        <div className="profile-info bg-light p-4 rounded shadow">
          <p className="text-dark">
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p className="text-dark">
            <strong>Username:</strong> {userProfile.username}
          </p>
          <p className="text-dark">
            <strong>Story Language:</strong> {userProfile.storyLanguage||"English"}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary w-100 mt-3"
            style={{ backgroundColor: "#007bff", color: "#fff" }}
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}

export default Profile;
