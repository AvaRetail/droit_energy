

import React, {useEffect} from "react";
import img1 from '../img/partner.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function Quote() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <section className="all_section_bg">
    <div className="all-section-bg container-fluid bg-light overflow-hidden px-lg-2 my-3">
    <div className="container quote px-lg-0"  data-aos="fade-down" data-aos-duration="4500">
        <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 quote-text py-2 wow fadeIn" data-wow-delay="0.5s"  data-aos="fade-down" data-aos-duration="4500">
                <div className="p-lg-5">
                    {/* <h6 className="text-primary">Contact Us</h6> */}
                    <div className="title mb-3" >
                            <h5 className="text-primary">Contact Us</h5>
                        </div>
                    <h4 className="mb-4">Partner with us</h4>
                    <p className="mb-4 pb-2">Join us in our mission to create a cleaner and more sustainable India. Together, we can make a difference - one geothermal project at a time. Contact us now to learn more about how you can be part of the renewable energy revolution with Droit Energy. </p>
                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Your Name" style={{"height": "55px"}} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{"height": "55px"}} />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border-0" placeholder="Your Email" style={{"height": "55px"}} />
                            </div>
                            {/* <div className="col-12 col-sm-6">
                                <select className="form-select border-0" style={{"height": "55px"}}>
                                    <option selected>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 2</option>
                                    <option value="3">Service 3</option>
                                </select>
                            </div> */}
                            <div className="col-12">
                                <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: "400px"}}  data-aos="fade-up" data-aos-duration="4500">
                <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src={img1} style={{objectFit: "cover"}} alt="" />
                </div>
            </div>
           
        </div>
    </div>
</div>
</section>
  );
}
export default Quote;
