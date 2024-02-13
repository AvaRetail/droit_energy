
import React, {useEffect} from "react";
import img1 from '../img/l1.jpg'
import img2 from '../img/l2.jpg'
import img3 from '../img/l3.jpg'

// import { Link } from "react-scroll";
// import './Navbar.css';
function Carousel() {

  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative" data-dot="<img src={img1}>">
            <img className="img-fluid" src={img2} alt="" />
            <div className="owl-carousel-inner">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                            <h1 className="display-2 text-white animated slideInDown">
Powering Progress
Preserving the Planet</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3">Our mission is to utilize advancements in geoscience
to expedite the shift towards clean energy by delivering affordable
and dependable geothermal power solution</p>
                            <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                        </div>
                    </div>
                </div>
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
