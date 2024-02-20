import React, { useEffect } from "react";
import about from "../img/ao-3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Whydroit() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="whydroit"
      className="container-fluid bg-light overflow-hidden my-5 px-lg-2"
      data-aos="fade-down"
      data-aos-duration="4500"
    >
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0 align-items-center">
          <div
            className="col-lg-6 ps-lg-0 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="position-relative h-100"
              data-aos="fade-up"
              data-aos-duration="4500"
            >
              <img
                className="img-fluid w-100 h-100"
                src="https://droit.energy/wp-content/uploads/2024/02/why-us.jpg"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-lg-6 about-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
            data-aos="fade-down"
            data-aos-duration="4500"
          >
            <div className="p-lg-5 pe-lg-5">
              <h6 className="text-primary">Why Droit Energy</h6>
              <h4 className="mb-3" style={{ lineHeight: "unset"}}>
                We are a full-service geothermal company encompassing every aspect of harnessing geothermal energy.
              </h4>
              <div className="row">
                <div className="col-md-2 col-4">
                  <img
                    src="https://droit.energy/wp-content/uploads/2024/02/Engineer.png"
                    className="why-droit-icon"
                    alt="Engineer"
                  />
                </div>
                <div className="col-md-10 col-8">
                  <p className="pt-3">
                    A diverse group of expertise professionals including scientists, geologists, engineers and entrepreneurs.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-2 col-4 pe-lg-10">
                  <img
                    src="https://droit.energy/wp-content/uploads/2024/02/Experience.png"
                    className="why-droit-icon"
                    alt="Experience"
                  />
                </div>
                <div className="col-md-10 col-8">
                  <p className="pt-3">
                    Combined experience and expertise to successfully select energy sites through renovation of large scale consistent and sustainable energy.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-2 col-4">
                  <img
                    src="https://droit.energy/wp-content/uploads/2024/02/Vector.png"
                    className="why-droit-icon"
                    alt="Adjacent Technologies"
                  />
                </div>
                <div className="col-md-10 col-8">
                  <p className="pt-3">
                    A team with experience in adjacent technologies including Oil & Gas, Coal thermal energy, Turbine technologies and environmental compliance.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-2 col-4">
                  <img
                    src="https://droit.energy/wp-content/uploads/2024/02/law.png"
                    className="why-droit-icon"
                    alt="Compliance"
                  />
                </div>
                <div className="col-md-10 col-8">
                  <p className="pt-3">
                    We ensure compliance with local, state and national regulations and connecting into power grids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whydroit;
