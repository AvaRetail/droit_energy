

import React, {useEffect} from "react";
import img1 from '../img/news1.png'
import img2 from '../img/news2.png'
import img3 from '../img/news3.png'
import Aos from "aos";
import "aos/dist/aos.css";
// import './Navbar.css';
function News() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="bg-light">
    <div className="container-xxl py-5">
        <div className="container">
            {/* <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "600px"}}>
                <h6 className="text-primary">Latest News</h6>
                <h1 className="mb-4">Visit Our Latest Blogs</h1>
            </div> */}
             <div className="title mb-3 cleaner-h2 pt-1" >
                               <h5 className="text-primary">Latest News</h5>
                   {/* <h1 className="mb-4">Experienced Team Members</h1> */}
                           </div>
            {/* <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-12 text-center">
                    <ul className="list-inline mb-5" id="portfolio-flters">
                        <li className="mx-2 active" data-filter="*">All</li>
                        <li className="mx-2" data-filter=".first">Solar Panels</li>
                        <li className="mx-2" data-filter=".second">Wind Turbines</li>
                        <li className="mx-2" data-filter=".third">Hydropower Plants</li>
                    </ul>
                </div>
            </div> */}
            <div className="row g-4 pt-3 portfolio-container wow fadeInUp" >
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img1} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img1} data-lightbox="portfolio">
                                <i className="fa fa-eye"></i>
                                </a>
                            {/* <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="">
                                <i className="fa fa-link"></i>
                                </a> */}
                        </div>
                    </div>
                    <div className="pt-3 pb-3">
                        <p className="mb-0">James Lelong on October 10, 2017</p>
                        <hr className="text-primary w-25 my-3" />
                        <h5 className="lh-base">News Title</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
                        <hr/>
                        <p className="mb-0">India</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first" >
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img3} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img3} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            {/* <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i className="fa fa-link"></i></a> */}
                        </div>
                    </div>
                    <div className="pt-3 p-3">
                        <p className="mb-0">James Lelong on October 10, 2017</p>
                        <hr className="text-primary w-25 my-3" />
                        <h5 className="lh-base">News Title</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
                        <hr/>
                        <p className="mb-0">India</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img2} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img2} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            {/* <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i className="fa fa-link"></i></a> */}
                        </div>
                    </div>
                    <div className="pt-3 pb-3">
                        <p className="mb-0">James Lelong on October 10, 2017</p>
                        <hr className="text-primary w-25 my-3" />
                        <h5 className="lh-base">News Title</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
                        <hr/>
                        <p className="mb-0">India</p>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img3} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img3} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-primary mb-0">Solar Panels</p>
                        <hr className="text-primary w-25 my3"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img2} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img2} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-primary mb-0">Wind Turbines</p>
                        <hr className="text-primary w-25 my-3"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item third">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={img1} alt="" />
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={img1} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-primary mb-0">Hydropower Plants</p>
                        <hr className="text-primary w-25 my-3" />
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </div>
  );
}
export default News;
