
import React, {useEffect} from "react";
import img1 from '../img/hiw-1.jpg'
import img2 from '../img/hiw-2.jpg'
import img3 from '../img/hiw-3.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div id="services" className="container-xxl  py-2">
        <div className="container" data-aos="fade-up" data-aos-duration="4500">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth":"600px"}}>
                {/* <h6 className="text-primary">Why Geothermal Energy</h6> */}
                <div className="title mb-3 cleaner-h2" >
                            <h5 className="text-primary">Why Geothermal Energy</h5>
                        </div>
                <h4 className="mb-4">A sustainable energy solution, widely accessible in close proximity to every community and industrial hub across the globe </h4>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-down" data-aos-duration="4500">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img1} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solid fa-seedling fa-3x"></i>
                            </div>
                            <h4 className="mb-3">A Sustainable Solution</h4>
                            <p>Leveraging geothermal resources, we spearhead a shift towards sustainable energy, democratizing access to clean power worldwide. Committed to securing a brighter, greener future, we deliver dependable, eco-friendly solutions. Our endeavor isn’t just about innovation; it’s a dedication to ensuring a sustainable legacy for generations to come.</p>
                            {/* <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" data-aos="fade-up" data-aos-duration="4500">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img2} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solid fa-bolt fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Clean Energy for All </h4>
                            <p>Harnessing geothermal energy, we revolutionize energy production, providing a sustainable alternative for all. Our commitment extends beyond mere innovation; it’s a pledge to empower communities worldwide with accessible, reliable clean energy. Together, we forge a brighter, greener future, ensuring prosperity for generations to come. 

</p>
                            {/* <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s"  data-aos="fade-down" data-aos-duration="4500">
                    <div className="service-item rounded overflow-hidden">
                        <img className="img-fluid" src={img3} alt="" />
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solid fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Thinking Beyond Business</h4>
                            <p>Our dedication to societal betterment drives us to align with the UN’s Sustainable Development Goals. Through geothermal energy investments, we progress towards SDG 7, ensuring affordable, clean energy, and SDG 13, combating climate change. Together, we propel a sustainable future, making a tangible difference for global prosperity.</p>
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
