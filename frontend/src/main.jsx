import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css";
import HomePage from "./components/HOme/HomePage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/LOgin/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import LearnTopic from "./components/Know topic/LearnTopic.jsx";
import { UserContextProvider } from "./Contex/Contex_Api.jsx";
import ResetPassword from "./components/Reset password/ResetPassword.jsx";
import Facts from "./components/Facts/Facts.jsx";
import UserAccount from "./components/Accounts/UserAccount.jsx";
import Profile from "./components/Accounts/Profile.jsx";
import SavedStories from "./components/Accounts/SavedStories.jsx";
import StoryOfNotification from "./components/StoryOfNotification/StoryOfNotification.jsx";
import AllTopics from "./components/Dashboard/AllTopics.jsx";
import SharedStory from "./components/SharedStory.jsx";
// import NavbarOptions from "./components/NavbarOptions/NavbarOptions.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forget-password" element={<ResetPassword />} />
      <Route path="/learn/:topic" element={<LearnTopic />} />
      <Route path="/learn/facts/:topic" element={<Facts />} />
      <Route path="/accountSettings" element={<UserAccount />}>
         <Route index element={<Profile />}/>
        <Route path="profile"  element={<Profile />} />
        <Route path="savedStories"  element={<SavedStories/>} />
      </Route>
      <Route path="/askQuestion" element/>
      <Route path="/storyOfNotification" element={<StoryOfNotification />} />
      <Route path="/allTopics" element={<AllTopics />} />
      <Route path="/sharedStory/:storyId" element={<SharedStory/>} />
            {/* <Route path="/NavbarTopics/:topic" element={<NavbarOptions/>} /> */}
    </>
  )
);

createRoot(document.getElementById("root")).render(

  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
</GoogleOAuthProvider>

);
