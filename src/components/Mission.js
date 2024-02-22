

import React, {useEffect} from "react";
import about from '../img/about-us.png'
import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function Mission() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div id="mission_section" className="container mission-section p-3" >
        {/* <br /> */}
    <div className="container-fluid overflow-hidden my-3 px-lg-0 mission-section">
        <div className="container about px-lg-0">
        <div className="title mb-3 cleaner-h2 pt-5" >
                            <h5 className="text-primary">Our Mission</h5>
                        </div>
            <div className="row g-0 mx-lg-0">
            
                <div className="col-lg-6 ps-lg-0 wow fadeIn">

                    <div className="position-relative h-100" data-aos="fade-up" data-aos-duration="4500">
                        {/* <img className="position-absolute img-fluid w-100 h-100" src={about} style={{"objectFit": "cover"}} alt="" /> */}
                        {/* <iframe className="img-fluid w-100 h-100" style={{objectFit: "cover;"}} src="https://www.youtube.com/embed/j7q653ffQO4?si=IYzTJmQE1fi_hkhA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                        {/* <h6 className="text-primary">Our Mission</h6> */}
                       
                        <p><i className="fa fa-check-circle text-primary me-3"></i>We aim to expedite the clean energy transition in India through innovative applications in geoscience, ensuring the provision of cost-effective and dependable geothermal energy</p>
                    </div>
                </div>
                <div className="col-lg-6 about-text fadeIn" data-aos="fade-down" data-aos-duration="4500">
                    <div className="pe-lg-0">
                        
                        <p className="mb-4"><i className="fa fa-check-circle text-primary me-3"></i>The emerging geothermal industry of the next generation continues to present significant opportunities for cost reduction through technological innovation and learning curves. With innovation implemented, robust commercial demand, increasing policy support, and optimistic cost-reduction projections, there are no obstacles preventing the dawn of a new era in geothermal energy.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Mission;
