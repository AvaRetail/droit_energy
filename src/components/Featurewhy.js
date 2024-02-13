
import React, {useEffect} from "react";
import img1 from '../img/feature.jpg'
import img2 from '../img/l2.jpg'
import img3 from '../img/l3.jpg'

// import { Link } from "react-scroll";
// import './Navbar.css';
function Featurewhy() {

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <h6 className="text-primary">How It Works! </h6>
                        <h1 className="mb-4">Revealing Earth's Power</h1>
                        <p className="mb-4 pb-2">Welcome to the future of sustainable energy – where we harness the Earth's own warmth to power our world. Let's delve into the fundamentals of geothermal energy and discover how this natural marvel is revolutionizing the way we generate power. </p>
                        <div className="row g-4">
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
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{"minHeight": "400px;"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={img1} style={{"objectFit":"cover"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Featurewhy;
