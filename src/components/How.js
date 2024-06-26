
import React, {useEffect} from "react";
import img1 from '../img/howitworks.webp'

import Aos from "aos";
import "aos/dist/aos.css";

function How() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="bg-light">
    <div id="howsection" className="container overflow-hidden my-2 px-lg-2" >
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-1 wow fadeIn" data-wow-delay="0.1s">
                  
                    <div className="p-lg-5 ps-lg-3">
                    <div className="title mb-3" >
                        <h5 className="text-primary">How It Works</h5>
                        </div>
                        {/* <h1 className="mb-4">Revealing Earth's Power: The Basics of Geothermal Energy</h1> */}
                        <p className="mb-4 pb-2"><i className="fa fa-check-circle text-primary me-3"></i>The process of harnessing geothermal energy begins by drilling deep into the Earth’s crust. The Earth’s interior, at these depths, is hotter than the surface, and this heat can be captured through wells. Water is then circulated through these wells, turning into steam as it encounters the intense heat. This steam is what drives turbines, generating electricity.</p>
                        <p className="mb-4 pb-2"><i className="fa fa-check-circle text-primary me-3"></i>Unlike some other renewable sources, geothermal energy is a consistent, 24/7 power supply – it's not dependent on weather conditions or time of day. In essence, geothermal energy is a clean, reliable, and sustainable power source that harnesses the Earth's natural heat. </p>
                        {/* By utilizing this incredible force, we're not just providing energy for today; we're investing in a greener, more sustainable tomorrow</p> */}
                        {/* <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-primary rounded-circle">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Quality</p>
                                        <h5 className="mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-primary rounded-circle">
                                        <i className="fa fa-user-check text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Expert</p>
                                        <h5 className="mb-0">Workers</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-primary rounded-circle">
                                        <i className="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Free</p>
                                        <h5 className="mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-primary rounded-circle">
                                        <i className="fa fa-headphones text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Customer</p>
                                        <h5 className="mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 p-4 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "300px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={img1} style={{"objectFit": "cover"}} alt="" />
                        {/* <iframe className="img-fluid w-100 h-100" style={{objectFit: "cover"}} src="https://www.youtube.com/embed/j7q653ffQO4?si=IYzTJmQE1fi_hkhA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
export default How;
