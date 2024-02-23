
import React, {useEffect} from "react";
import img1 from '../img/l1.jpg'
import img2 from '../img/l2.jpg'
import img3 from '../img/l3.jpg'
import background from '../video/back.mp4';
import background1 from '../video/back1.mp4';
import background3 from '../video/back3.mp4';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-scroll";
import b1 from '../video/b1.mp4';
// import { Link } from "react-scroll";
// import './Navbar.css';
function Carousel() {

    // Define animation properties using useSpring hook
    // const props = useSpring({
    //     from: { transform: 'rotate(-45deg)' },
    //     to: { transform: 'rotate(0deg)' },
    //     config: { duration: 300 }
    //   });
    const props = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500 }
      });
  return (
    <div id="carousel" className="container-fluid p-0 pb-1 wow fadeIn" data-wow-delay="0.1s">
    <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative" data-dot="<img src={img1}>">
            {/* <img className="img-fluid" src={img2} alt="" /> */}
            <div className="header-container" >
                <video autoPlay loop muted className='background-video'  data-aos="fade-up" data-aos-duration="4500">
                    <source src={background} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="owl-carousel-inner">
                <animated.div className="container" >
                    <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                            <h1 className="display-2 text-white animated slideInDown" data-aos="fade-down" data-aos-duration="4500">
                                Powering Progress
                                Preserving the Planet</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3" data-aos="fade-up" data-aos-duration="5000">Our mission is to utilize advancements in geoscience to expedite the 
                            shift towards clean energy by delivering affordable and dependable geothermal power solutions. </p>
                            {/* <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">About Us</a> */}
                            {/* <Link
                                    className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{cursor: "pointer"}}
                                >
                                    About Us
                                </Link> */}
                            {/* <a href="" className="btn btn-outline-success rounded-pill py-3 px-5" style={{background:"white"}}>Contact Us</a> */}
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
        {/* <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
            <img className="img-fluid" src={img2} alt="" />
            <div className="owl-carousel-inner">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                            <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
            <img className="img-fluid" src={img3} alt=" /" />
            <div className="owl-carousel-inner">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                            <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
</div>
  );
}
export default Carousel;
