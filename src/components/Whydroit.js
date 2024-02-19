

import React, {useEffect} from "react";
import about from '../img/about-us.png'
import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function Whydroit() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div id="whydroit" className="container-fluid bg-light overflow-hidden my-5 px-lg-0" data-aos="fade-down" data-aos-duration="4500">
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s" data-aos="fade-down" data-aos-duration="4500">
                    <div className="p-lg-5 pe-lg-0">
                        <h6 className="text-primary">Why Droit Energy</h6>
                        <h1 className="mb-4">We are a full-service geothermal company encompassing every aspect of harnessing geothermal energy. </h1>
                        {/* <p>Tap into the Earth's Hidden Energy </p> */}
                        {/* <h4>Tap into the Earth's Hidden Energy </h4> */}
                        <br />

                        
                        <div className="row">
                                <div className="col-md-2">
                                <img src="https://droit.energy/wp-content/uploads/2024/02/Engineer.png" className="service-icon1"/>
                                </div>
                                <div className="col-md-10">
                        <p>A diverse group of expertise professionals including scientists, geologists, engineers and entrepreneurs. </p>
                        </div>
                        </div>
                        <br />
                        <div className="row" >
                                <div className="col-md-2">
                                    <img src="https://droit.energy/wp-content/uploads/2024/02/Experience.png" className="service-icon1" />
                                </div>
                                <div className="col-md-10">
                                    <p>Combined experience and expertise to successfully select energy sites through renovation of large scale consistent and sustainable energy. </p>
                                </div>
                           
                        </div>
                        <br />
                        <div className="row" >
                            <div className="col-md-2">
                                <img src="https://droit.energy/wp-content/uploads/2024/02/Vector.png" className="service-icon1"/>
                            </div>
                            <div className="col-md-10">
                        <p>A team with experience in adjacent technologies including Oil & Gas, Coal thermal energy, Turbine technologies and environmental compliance. </p>
                        </div>
                        </div>
                       
                        {/* <p><i className="fa fa-check-circle text-primary me-3"></i>A team with experience in adjacent technologies including Oil & Gas, Coal thermal energy, Turbine technologies and environmental compliance. </p> */}
                        {/* <a href="" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a> */}
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "100px" }}>

                    <div className="position-relative h-100" data-aos="fade-up" data-aos-duration="4500">
                        {/* <img className="position-absolute img-fluid w-100 h-100" src={about} style={{"objectFit": "cover"}} alt="" /> */}
                        <iframe className="img-fluid w-100 h-100" style={{objectFit: "cover;"}} src="https://www.youtube.com/embed/j7q653ffQO4?si=IYzTJmQE1fi_hkhA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
  );
}
export default Whydroit;
