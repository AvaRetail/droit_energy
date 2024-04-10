

import React, {useEffect} from "react";
import img1 from '../img/AtulHirpara.jpg'
import img2 from '../img/team-1.jpg'
import img3 from '../img/team-3.jpg'
// import './Navbar.css';
import Aos from "aos";
import "aos/dist/aos.css";
function Team() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
  return (
    <div className="bg-light">
    <div id="team" className="container-xxl py-2">
        <div className="container">
            {/* <div className=" text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "600px"}}>
                <h5 className="text-primary">Team Member</h5>
            </div> */}
            <div className="title mb-3 cleaner-h2 pt-5" >
                            <h5 className="text-primary">Team Members</h5>
                {/* <h1 className="mb-4">Experienced Team Members</h1> */}
                        </div>
            <div className="row g-4 pt-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img1} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Atul Hirpara</h5>
                            <span>Chief Executive Officer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" >
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img2} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img3} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Bhavesh Varyani</h5>
                            <span>Support Member</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-down" data-aos-duration="4500">
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img3} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img2} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s"  data-aos="fade-up" data-aos-duration="4500">
                    <div className="team-item rounded overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={img3} alt="" />
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    </div>
  );
}
export default Team;
