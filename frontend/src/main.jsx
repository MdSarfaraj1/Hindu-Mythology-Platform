import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
import LearnTopic from "./components/LeranTopic/LearnTopic.jsx";
import { UserContextProvider } from "./Contex/Contex_Api.jsx";
import ResetPassword from "./components/Reset password/ResetPassword.jsx";
import Facts from "./components/Facts/Facts.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forget-password" element={<ResetPassword />} />
      <Route path="/learn/:topic" element={<LearnTopic/>} />
      <Route path="/learn/facts/:topic" element={<Facts/>} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>

);
