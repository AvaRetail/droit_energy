

import React, {useEffect} from "react";
import about from '../img/about-us.png'
import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0" data-aos="fade-down" data-aos-duration="4500">
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "100px" }}>

                    <div className="position-relative h-100" data-aos="fade-right" data-aos-duration="4500">
                        {/* <img className="position-absolute img-fluid w-100 h-100" src={about} style={{"objectFit": "cover"}} alt="" /> */}
                        <iframe className="img-fluid w-100 h-100" style={{objectFit: "cover;"}} src="https://www.youtube.com/embed/j7q653ffQO4?si=IYzTJmQE1fi_hkhA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s" data-aos="fade-left" data-aos-duration="4500">
                    <div className="p-lg-5 pe-lg-0">
                        <h6 className="text-primary">About Us</h6>
                        <h1 className="mb-4">Unlock the Power of<br/> Geothermal Energy with DROIT </h1>
                        {/* <p>Tap into the Earth's Hidden Energy </p> */}
                        {/* <h4>Tap into the Earth's Hidden Energy </h4> */}
                        <p><i className="fa fa-check-circle text-primary me-3"></i>At DROIT, we harness the incredible potential of geothermal energy - a renewable energy source <br />that taps into the Earth's natural heat. </p>
                        <p><i className="fa fa-check-circle text-primary me-3"></i>By drilling at the right depths, we unlock abundant heat energy that can power turbines and generate electricity, <br />all while leaving zero carbon footprint. </p>
                        {/* <p><i className="fa fa-check-circle text-primary me-3"></i>Tempor erat elitr rebum at clita</p> */}
                        <a href="" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default About;
