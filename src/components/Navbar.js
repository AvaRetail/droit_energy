
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-scroll";
// import './Navbar.css';
function Navbar() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" data-aos="fade-down" data-aos-duration="4500">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0 text-primary">Droit Energy</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
                <a href="" className="nav-item nav-link">About</a>
                <a href="" className="nav-item nav-link">Service</a>
                <a href="" className="nav-item nav-link">How It Works</a>
                {/* <a href="project.html" className="nav-item nav-link">Project</a> */}
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="feature.html" className="dropdown-item">Feature</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div> */}
                <a href="" className="nav-item nav-link">Why Us</a>
            </div>
            <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Contact Us<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
  );
}
export default Navbar;