import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Whatwedo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (

    <div className="container-fluid ml-3 overflow-hidden pt-2 my-3 px-lg-2">
      <div id="what-we-do-section">
        <div className="col-sm-12">
        <div className="title mb-3 cleaner-h2" >
                            <h5 className="text-primary">What We Do</h5>
                        </div>
          
        </div>
      </div>
      {/* <br /> */}
      <div className="whatwedo-sec">
        <div className="pt-1">
          <div className="row gx-3 justify-content-center">
            <div className="col-lg-2 col-md-4">
              <div className="text-center">
                <div className="card-body" data-aos="fade-down"
            data-aos-duration="4500">
                  <div className="whatwedo-icon">  
                  <i className="fas fa-search-location fa-6x mb-3"></i>
                  </div>
                  <h5 className="card-title">Site selection & Evaluation</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className=" text-center">
                <div className="card-body" data-aos="fade-up"
            data-aos-duration="4500">
                <div className="whatwedo-icon">  
                  <i className="fas fa-globe-asia fa-6x mb-3"></i>
                  </div>
                  <h5 className="card-title">Sub-Surface Geology</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4" data-aos="fade-down"
            data-aos-duration="4500">
              <div className="text-center">
                <div className="card-body">
                <div className="whatwedo-icon">  
                  <i className="fas fa-tools fa-6x mb-3"></i>
                  </div>
                  <h5 className="card-title">Drilling to Great Depths</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4" data-aos="fade-up"
            data-aos-duration="4500">
              <div className="text-center">
                <div className="card-body">
                <div className="whatwedo-icon">  
                  <i className="fas fa-seedling fa-6x mb-3"></i>
                  </div>
                  <h5 className="card-title">Harvesting Geothermal Energy</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4" data-aos="fade-down"
            data-aos-duration="4500">
              <div className="text-center">
                <div className="card-body">
                <div className="whatwedo-icon">  
                  <i className="far fa-sun fa-6x mb-3"></i>
                  </div>
                  <h5 className="card-title">Converting Geothermal Energy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
