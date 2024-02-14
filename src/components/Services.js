
import React, {useEffect} from "react";
import img1 from '../img/hiw-1.jpg'
import img2 from '../img/hiw-2.jpg'
import img3 from '../img/hiw-3.jpg'
import img4 from '../img/img-600x400-4.jpg'
import img5 from '../img/img-600x400-5.jpg'
import img6 from '../img/img-600x400-6.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="container-xxl py-5">
        <div className="container" data-aos="fade-up" data-aos-duration="4500">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth":"600px"}}>
                <h6 className="text-primary">Why Droit Energy</h6>
                <h1 className="mb-4">A sustainable energy solution widely accessible across globe </h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-left" data-aos-duration="4500">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img1} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 className="mb-3">A Sustainable Solution</h4>
                            <p>We are committed to creating a sustainable future by providing highly space-efficient and affordable energy sources. With our team of experts and trusted partner companies, we are dedicated to building a network of geothermal energy plants across India.</p>
                            {/* <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a> */}
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
                            <h4 className="mb-3">Clean Energy for All </h4>
                            <p>By harnessing geothermal energy, we offer a clean and reliable alternative to traditional energy sources. Our mission is to make clean energy accessible to everyone, ensuring a brighter and more sustainable future for generations to come. 

</p>
                            {/* <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s"  data-aos="fade-right" data-aos-duration="4500">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img3} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Thinking Beyond Business</h4>
                            <p>We are committed to creating a positive impact on society and aligning our efforts with the United Nations' Sustainable Development Goals. By investing in geothermal energy, we are actively working towards achieving goals such as affordable and clean energy.</p>
                            {/* <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a> */}
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
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
                </div> */}
            </div>
        </div>
    </div>
  );
}
export default Services;
