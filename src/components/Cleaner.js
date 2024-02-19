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
    <section className="cleaner_section vc_custom_1708072868394">
      <div className="container clearfix">
        <div className="vc_row wpb_row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="cta-box cta-box--vertical text-white">
                  <div className="cta-box-copy">
                    <h2 className="cleaner-h2">Let’s Make the Planet Cleaner</h2>
                    <p className="cleaner-p"> 
                      Environmentally, the extraction of geothermal energy has
                      one of the lowest impacts compared to <br />any of the available
                      renewable energy sources. The consistent production of
                      clean energy will<br /> facilitate a shift towards sustainable
                      energy consumption for the nation.
                    </p>
                  </div>
                  {/* <a href="" className="btn btn-primary rounded-pill py-3 px-5 mt-3 cleaner-btn">Contact Us</a> */}
                  <Link
                        className="btn btn-primary rounded-pill py-3 px-5 mt-3 cleaner-btn cleaner-p"
                        to="quote"
                        spy={true}
                        smooth={true}
                        duration={50}
                        style={{cursor: "pointer"}}
                    >
                        Contact Us
                    </Link>
                  
                   
                  
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
export default Cleaner;
