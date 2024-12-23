
import Categoty from "./CAtegory";
import { Link } from "react-router-dom";
const Hero = () => {
 
  return (
    <div
      className="container-fluid p-0 position-relative"
      style={{
        backgroundImage: ' url("Designer.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div className="container"></div>
      <div className="row py-5"></div>

      <div className="row py-5 mx-5">
        <div className="col-6 py-5 px-5 ">
          <h1
            className="display-4 fw-bold mb-4 fs-2"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Explore The Mystical
            <br />
            World of <span style={{ color: "#00ffff" }}>Hinduism</span>
          </h1>

          <button
            type="button"
            className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm"
          >
            <Link to={"/signup"} className="text-white"> Sign Up Now</Link>
          </button>
        </div>
      </div>
      {/* Categories Section  */}
      <div
        className="position-absolute bottom-0 w-100 py-4"
        style={{
          background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
        }}
      >
        <div className="container">
          <div className="row g-4">
            <Categoty
              heading="Epic Tales"
              paragraph="Ramayana and Mahabharata"
            />
            <Categoty
              heading="Divine Beings"
              paragraph="Lords, Deities, and Heroes"
            />
            <Categoty
              heading="Divine Beings"
              paragraph="Lords, Deities, and Heroes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
