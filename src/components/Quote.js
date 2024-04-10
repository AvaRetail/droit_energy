import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import img1 from "../img/partner_1.webp";
import axios from "axios";
import Loader from "./Loader";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    mail: "",
    note: "",
    captchaInput: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captcha;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    if (!value.trim()) {
      errorMessage = "This field is required";
    } else if (name === "mail" && !isValidEmail(value)) {
      errorMessage = "Invalid email address";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValid = Object.keys(formData).every((name) => {
      const value = formData[name];
      let errorMessage = "";
      if (!value.trim() && name !== "note") {
        errorMessage = "This field is required";
      } 
      else if (name === "mobile" && !/^\+\d{3}\d{9}$/.test(value)) {
        errorMessage =
          "Mobile number must be numeric and start with a country code (e.g., +91) followed by 10 digits";
      }
       else if (name === "mail" && !isValidEmail(value)) {
        errorMessage = "Invalid email address";
      } else if (name === "captchaInput" && value !== captcha) {
        errorMessage = "Enter valid captcha!!";
      }
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
      return !errorMessage;
    });

    if (!formValid || formData.captchaInput !== captcha) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`https://cagreporting.azurewebsites.net/ServiceLayer/AVAReportService.svc/Sendemail?name=${formData.name}&mobile=${formData.mobile}&mail=${formData.mail}&note=${formData.note}`);
      setLoading(false);

      if (response.status === 200) {
        if (response.data == 1) {
          setShowSuccess(true);
          setShowMessage(
            "Mail Sent Successfully! Our team will contact you soon!"
          );
          setFormData({
            name: "",
            mobile: "",
            mail: "",
            note: "",
            captchaInput: "",
          });
          setCaptcha(generateCaptcha());
        } else if (response.data == 0) {
          setShowMessage("OOPS!!! Something wrong with API !! Try again.");
          setShowError(true);
        } else {
          setShowMessage("OOPS!!! API call failed");
          setShowError(true);
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.message) {
        setShowError(true);
        setShowMessage("OOPS!!! Server Down!! " + error.message);
      } else {
        setShowError(true);
        setShowMessage("Something Went Wrong!!!");
      }
    }
  };

  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleClose = () => {
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <section className="all_section_bg">
      {loading && <Loader />}
      <div className="all-section-bg container-fluid bg-light overflow-hidden px-lg-2 my-3">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 quote-text py-2 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5">
                <div className="title mb-3">
                  <h5 className="text-primary">Contact Us</h5>
                </div>
                <h4 className="mb-4">Partner with us</h4>
                <p className="mb-4 pb-2">
                  Join us in our mission to create a cleaner and more
                  sustainable India. Together, we can make a difference - one
                  geothermal project at a time. Contact us now to learn more
                  about how you can be part of the renewable energy revolution
                  with Droit Energy.{" "}
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Your Name*"
                        style={{ height: "55px" }}
                      />
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Your Mobile With Country Code*"
                        style={{ height: "55px" }}
                      />
                      {errors.mobile && (
                        <div className="text-danger">{errors.mobile}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Your Email*"
                        style={{ height: "55px" }}
                      />
                      {errors.mail && (
                        <div className="text-danger">{errors.mail}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Special Note"
                      ></textarea>
                    </div>
                    <div className="col-12">
                        <div className="captcha-container">
                            <div className="captcha-wrapper">
                                <div className="captcha-input">
                                    <input type="text" name="captchaInput" value={formData.captchaInput} onChange={handleChange} className="form-control border-0" placeholder="Enter Captcha" />
                                </div>
                                <div className="reload-icon-button" onClick={handleReloadCaptcha}>
                                    <FaSyncAlt />
                                </div>
                            </div>
                    
                            <div className="captcha-info">
                                <span>Captcha: {captcha}</span>
                            </div>
                        </div>
                        {errors.captchaInput && <div className="text-danger">{errors.captchaInput}</div>}
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={img1}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showSuccess} onHide={handleClose} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaCheckCircle color="green" size={24} /> Success
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{showMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showError} onHide={handleClose} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaExclamationCircle color="red" size={24} /> Error
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{showMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Quote;
