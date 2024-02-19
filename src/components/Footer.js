

import React, {useEffect} from "react";
import img1 from '../img/gallery-1.jpg'
import img2 from '../img/gallery-2.jpg'
import img3 from '../img/gallery-3.jpg'
import img4 from '../img/gallery-4.jpg'
import img5 from '../img/gallery-5.jpg'
import img6 from '../img/gallery-6.jpg'
import logo from '../img/logo.png'
import { Link } from "react-scroll";


import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s"  data-aos="fade-down" data-aos-duration="4500">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Address</h5>
                    <div className="mb-2">
                            <p><i className="fa fa-globe me-3"></i>India</p>
                            <p><i className="fa fa-map-marker-alt me-3"></i>Near Udhna Darwaja, behind Reliance mall, Surat, Gujarat, India. 395002.</p>
                            <p><i className="fa fa-phone-alt me-3"></i>(+91) 89288 62707 (WhatsApp)</p>
                        </div>

                        <hr />
                        <div>
                            <p><i className="fa fa-globe me-3"></i>USA</p>
                            <p><i className="fa fa-map-marker-alt me-3"></i>3280 B street suite C, Auburn, WA 98001.</p>
                            <p><i className="fa fa-phone-alt me-3"></i>(+1) 425 522 4037</p>
                        </div>
                        <hr />
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>contact@droit.energy</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <h5 className="text-white mb-4">Quick Links</h5> */}
                    <img src={logo} height="75px" width="185"/>

                    <br />
                    <br />
                    <p>Partner with us in our mission to create a cleaner and more sustainable India. Together, we can make a difference -one geothermal project at a time. Contact us now to learn more about how you can be part of the renewable energy revolution with DROIT. </p>
                    {/* <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Service</a>
                    <a className="btn btn-link" href="">How it works</a>
                    <a className="btn btn-link" href="">Why us</a>
                    <a className="btn btn-link" href="">Support</a> */}
{/* <Link
                className="btn btn-link"
                to="top"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                Home
              </Link>
<Link
                className="btn btn-link"
                to="about"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                About
              </Link>
              <Link
                className="btn btn-link"
                to="featurewhy"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                How It Works
              </Link>
              <Link
                className="btn btn-link"
                to="services"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                Why Us
              </Link>

              <Link
                className="btn btn-link"
                to="team"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                Team
              </Link>
              <Link
                className="btn btn-link"
                to="quote"
                spy={true}
                smooth={true}
                duration={50}
                style={{cursor: "pointer"}}
              >
                Contact
              </Link> */}

                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img1} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img2} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img3} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img1} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img2} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src={img3} alt=""/>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Contact Us</h5>
                    {/* <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p> */}
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Droit Energy</a>, All Right Reserved.
                    </div>
                    {/* <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <img src="../img/logo.png" width="250" height="100"/>, All Right Reserved.
                    </div> */}
                    {/* <div className="col-md-6 text-center text-md-end">
                        
                        Designed By 
                        <a href="https://htmlcodex.com">HTML Codex</a>
                        <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
}
export default Footer;
