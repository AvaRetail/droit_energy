import React, { useEffect } from "react";
import about from "../img/about-us.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
// import './Navbar.css';
function Cleaner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container overflow-hidden my-3 px-lg-2">
      <div className="container about px-lg-0" data-aos="fade-up" data-aos-duration="4500">
        {/* <h6 className="text-primary cleaner-h2 p-3">
          Let’s Make the Planet Cleaner!
        </h6> */}
        <div className="title mb-3 cleaner-h2" >
                            <h5 className="text-primary">Let’s Make the Planet Cleaner!</h5>
                        </div>
        {/* <br /> */}
        <p className="mb-4 pb-1 cleaner-p">
          Environmentally, the extraction of geothermal energy has one of the
          lowest impacts compared to any of the available renewable energy
          sources. The consistent production of clean energy will facilitate a
          shift towards sustainable energy consumption for the nation.
        </p>
      </div>
      <div
        className="button-container"
        data-aos="fade-down"
        data-aos-duration="4500"
      >
        <Link
          className="btn btn-primary rounded-pill py-3 px-5 
          mt-1 cleaner-btn"
          to="quote"
          spy={true}
          smooth={true}
          duration={50}
          style={{ cursor: "pointer" }}
        >
          Contact Us
        </Link>
      </div>
      <br />
    </div>
  );
}
export default Cleaner;
