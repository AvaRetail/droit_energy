import React, { useEffect } from "react";
import logo from "../img/logofooter.png";

import { Link } from "react-scroll";

import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function Footer1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6"  data-aos="fade-down" data-aos-duration="4500">
              <div className="widget company-intro-widget">
                <Link
                  className="site-logo"
                  to="top"
                  style={{ cursor: "pointer" }}
                >
                  <img src={logo} alt="logo" />
                </Link>

                <p>
                  Partner with us in our mission to create a cleaner and more
                  sustainable India. Together, we can make a difference -one
                  geothermal project at a time. Contact us now to learn more
                  about how you can be part of the renewable energy revolution
                  with Droit Energy.
                </p>
                {/* <ul className="company-footer-contact-list">
                <li><i className="fas fa-phone"></i>0123456789</li>
                <li><i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
              </ul> */}
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget course-links-widget">
              <h5 className="widget-title">Popular Courses</h5>
              <ul className="courses-link-list">
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Academic English</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Web Technology</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>PC Systems</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Ui Web Design</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Web Development</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Apps Development</a></li>
              </ul>
            </div>
          </div> */}
            <div className="col-lg-6 col-md-6 col-sm-6"  data-aos="fade-up" data-aos-duration="4500">
              <div className="widget latest-news-widget">
                <ul className="small-post-list">
                  {/* <h5 className="widget-title">Our Offices
              <hr /></h5> */}
                  <div className="title-footerline mb-3">
                    <h5 className="text-white">Our Offices</h5>
                  </div>
                  {/* <li>
                  <div className="small-post-item"> */}
                  {/* <a href="#" className="post-date">July 18, 2018</a> */}
                  {/* <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6> */}
                  {/* <p><i className="fa fa-globe me-3"></i>India</p>
                    <p><i className="fa fa-map-marker-alt me-3"></i>Near Udhna Darwaja, behind Reliance mall, Surat, Gujarat, India. 395002.</p>
                    <p><i className="fa fa-phone-alt me-3"></i>(+91) 89288 62707 (WhatsApp)</p> */}
                  {/* </div>
                </li> */}
                  <li>
                    <div className="small-post-item">
                      <div className="info-container">
                        <p className=" pb-3">
                          <i className="fa fa-globe me-3"></i>India <br />
                        </p>
                        <p className=" pb-3">
                          <i className="fa fa-map-marker-alt me-3"></i>
                          <span>
                            Near Udhna Darwaja, behind Reliance mall, Surat,
                            Gujarat, India. 395002.
                          </span>
                        </p>
                        <p className=" pb-3">
                          <i className="fab fa-whatsapp me-3"></i>(+91) 89288
                          62707
                        </p>
                      </div>
                    </div>
                  </li>

                  <hr />
                  <li>
                    <div className="small-post-item">
                      <div className="info-container">
                        <p className="pb-3">
                          <i className="fa fa-globe me-3"></i>USA
                        </p>
                        <p className="pb-3">
                          <i className="fa fa-map-marker-alt me-3"></i>
                          <span>3280 B street suite C, Auburn, WA 98001.</span>
                        </p>
                        <p className="pb-3">
                          <i className="fas fa-phone-alt me-3"></i>(+1) 425 522
                          4037
                        </p>
                      </div>
                    </div>
                  </li>

                  <hr />
                  <li>
                    <p className="mb-2 text-white">
                      <i className="fa fa-envelope me-3"></i>
                      contact@droit.energy
                    </p>
                    <div className="d-flex pt-2 text-white">
                      {/* <a className="btn btn-outline-light btn-social text-white" href=""><i className="fab fa-twitter"></i></a> */}
                      {/* <a className="btn btn-square btn-outline-light btn-social text-white" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social text-white" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social text-white" href=""><i className="fab fa-linkedin-in"></i></a> */}

                      <a
                        className="btn btn-lg-square btn-outline-light btn-social rounded-circle mt-3 text-white"
                        href=""
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      {/* <a className="btn btn-lg-square btn-outline-light btn-social rounded-circle mt-3 text-white" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg-square btn-outline-light btn-social rounded-circle mt-3 text-white" href=""><i className="fab fa-instagram"></i></a> */}
                      <a
                        className="btn btn-lg-square btn-outline-light btn-social rounded-circle mt-3 text-white"
                        href=""
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        className="btn btn-lg-square btn-outline-light btn-social rounded-circle mt-3 text-white"
                        href=""
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget newsletter-widget">
              <h5 className="widget-title">Newsletter</h5>
              <div className="footer-newsletter">
                <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                <form className="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copy-right-text">© 2024 <a href="https://droit-renewableenergy.vercel.app/">Droit Energy</a> All Rights Reserved.</span>
            </div> */}
            <div className="col-md-6 text-center text-white text-md-start mb-3 mb-md-0">
              {/* &copy; <a href="#" className="text-white">Droit Energy</a>, All Rights Reserved. */}
              <span className="copy-right-text">
                © {currentYear}{" "}
                <a href="https://droit-renewableenergy.vercel.app/">
                  Droit Energy
                </a>{" "}
                All Rights Reserved.
              </span>
            </div>
            {/* <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer1;
