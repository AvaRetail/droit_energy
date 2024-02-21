import React, { useEffect } from "react";
import about from '../img/about-us.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="">
            <div className="container overflow-hidden my-2 px-lg-2" data-aos="fade-down" data-aos-duration="4500">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        {/* Order 1 in desktop, 2 in mobile */}
                        <div className="col-lg-6 pe-lg-0 p-4 wow fadeIn order-lg-1 order-2" data-wow-delay="0.5s" style={{ minHeight: "300px" }} data-aos="fade-up" data-aos-duration="4500">
                            <div className="position-relative h-100">
                                <iframe className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} src="https://www.youtube.com/embed/iBrSU22d0sI?si=F9kErI3FThJhgopb" title="Droit Energy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                        {/* Order 2 in desktop, 1 in mobile */}
                        <div className="col-lg-6 about-text py-1 wow fadeIn order-lg-2 order-1" data-wow-delay="0.5s" data-aos="fade-down" data-aos-duration="4500">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="title mb-3" >
                                    <h5 className="text-primary">What’s Geothermal Energy</h5>
                                </div>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Geothermal energy is the Earth's internal heat energy stored beneath its surface. This incredible resource originates from the Earth's formation and the decay of radioactive isotopes. As we tap into this vast reservoir, we unlock a renewable and clean source of power that stands out in the crowded energy landscape. (re write this).  </p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>At Droit Energy, we harness the incredible potential of geothermal energy - a renewable energy source that taps into the Earth's natural heat. By drilling at the right depths, we unlock abundant heat energy that can power turbines and generate electricity, all while leaving zero carbon footprint. </p>
                                {/* Show button only on desktop */}
                                <Link
                                    className="btn btn-primary rounded-pill py-3 px-5 mt-3 d-lg-inline-block d-none"
                                    to="featurewhy"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ cursor: "pointer" }}
                                >
                                    Read More
                                </Link>
                            </div>
                            {/* Show button only on mobile */}
                            <Link
                                className="btn btn-primary rounded-pill py-3 px-5 mt-3 d-none"
                                to="featurewhy"
                                spy={true}
                                smooth={true}
                                duration={500}
                                style={{ cursor: "pointer" }}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
