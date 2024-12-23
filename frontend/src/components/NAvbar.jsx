import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contex/Contex_Api";
import axios from "axios";
const Navbar = () => {
  const { userID, setUserID } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8085/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUserID(null); // Clear from context
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <img
            src="logo.jpeg"
            alt="Logo"
            style={{
              height: "40px", // Adjust this value as needed
              width: "auto", // Maintains aspect ratio
              borderRadius: "5px", // Optional: adds slight rounding to corners
              opacity: "1 !important", // Full opacity
              filter: "brightness(1.1)", // Makes it slightly brighter
              objectFit: "contain",
            }}
          />
          <h2
            style={{
              color: "#FFC125",

              fontSize: "1.8rem", // Adjust size as needed
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)", // Optional: adds depth
            }}
          >
            HINDUISM
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#featured">
                    Featured Content
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#news">
                    Latest Updates
                  </a>
                </li>
              </ul>
            </li>

            {/* Scriptures Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Scriptures
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#vedas">
                    Vedas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#upanishads">
                    Upanishads
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#puranas">
                    Puranas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#puranas">
                    Ramayana
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#puranas">
                    Mahabharata
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#bhagavad-gita">
                    Bhagavad Gita
                  </a>
                </li>
              </ul>
            </li>

            {/* Deities Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Deities
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#vishnu">
                    Vishnu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#shiva">
                    Shiva
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#brahma">
                    Brahma
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#all-deities">
                    All Deities
                  </a>
                </li>
              </ul>
            </li>

            {/* New Personalities Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Personalities
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#ram">
                    Ram
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#krishna">
                    Krishna
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#hanuman">
                    Hanuman
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#pandavas">
                    Pandavas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#bhim">
                    Bhim
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#arjun">
                    Arjun
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#sita">
                    Sita
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#draupadi">
                    Draupadi
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#all-personalities">
                    All Personalities
                  </a>
                </li>
              </ul>
            </li>

            {/* Account Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                {userID ? (
                  <li>
                    <button className="btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to={"/login"}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/signup"}>
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
