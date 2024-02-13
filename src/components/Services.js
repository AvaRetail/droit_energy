
import React, {useEffect} from "react";
import img1 from '../img/img-600x400-1.jpg'
import img2 from '../img/img-600x400-2.jpg'
import img3 from '../img/img-600x400-3.jpg'
import img4 from '../img/img-600x400-4.jpg'
import img5 from '../img/img-600x400-5.jpg'
import img6 from '../img/img-600x400-6.jpg'
function Services() {

  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth":"600px"}}>
                <h6 className="text-primary">Our Services</h6>
                <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img1} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Solar Panels</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img2} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Wind Turbines</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img3} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Hydropower Plants</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img4} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Solar Panels</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img5} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Wind Turbines</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img6} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Hydropower Plants</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
