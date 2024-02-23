import React, { useEffect, useRef } from 'react';
import img1 from '../img/testimonial-1.jpg';
import img2 from '../img/testimonial-2.jpg';
import img3 from '../img/testimonial-3.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonial1() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    useEffect(() => {
        const testim = document.getElementById("testim");
        const testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children);
        const testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children);
        const testimLeftArrow = document.getElementById("left-arrow");
        const testimRightArrow = document.getElementById("right-arrow");
        const testimSpeed = 4500;
        let currentSlide = 0;
        let currentActive = 0;
        let testimTimer;
        let touchStartPos;
        let touchEndPos;
        let touchPosDiff;
        const ignoreTouch = 30;

        function playSlide(slide) {
            for (let k = 0; k < testimDots.length; k++) {
                testimContent[k].classList.remove("active");
                testimContent[k].classList.remove("inactive");
                testimDots[k].classList.remove("active");
            }

            if (slide < 0) {
                slide = currentSlide = testimContent.length - 1;
            }

            if (slide > testimContent.length - 1) {
                slide = currentSlide = 0;
            }

            if (currentActive !== currentSlide) {
                testimContent[currentActive].classList.add("inactive");
            }
            testimContent[slide].classList.add("active");
            testimDots[slide].classList.add("active");

            currentActive = currentSlide;

            clearTimeout(testimTimer);
            testimTimer = setTimeout(function () {
                playSlide(currentSlide += 1);
            }, testimSpeed)
        }

        testimLeftArrow.addEventListener("click", function () {
            playSlide(currentSlide -= 1);
        })

        testimRightArrow.addEventListener("click", function () {
            playSlide(currentSlide += 1);
        })

        for (let l = 0; l < testimDots.length; l++) {
            testimDots[l].addEventListener("click", function () {
                playSlide(currentSlide = testimDots.indexOf(this));
            })
        }

        playSlide(currentSlide);

        document.addEventListener("keyup", function (e) {
            switch (e.keyCode) {
                case 37:
                    testimLeftArrow.click();
                    break;

                case 39:
                    testimRightArrow.click();
                    break;

                default:
                    break;
            }
        })

        testim.addEventListener("touchstart", function (e) {
            touchStartPos = e.changedTouches[0].clientX;
        })

        testim.addEventListener("touchend", function (e) {
            touchEndPos = e.changedTouches[0].clientX;

            touchPosDiff = touchStartPos - touchEndPos;

            if (touchPosDiff > 0 + ignoreTouch) {
                testimLeftArrow.click();
            } else if (touchPosDiff < 0 - ignoreTouch) {
                testimRightArrow.click();
            } else {
                return;
            }

        })
    }, []); // empty dependency array means this effect will run only once after initial render

    return (
        <div>
        <section id="testim" className="testim">
            {/* <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h5 className="text-primary">Testimonial</h5>
                <h1 className="mb-4">What Our Clients Say!</h1>
            </div> */}
            <div className="title mb-3 cleaner-h2" data-aos="fade-down" data-aos-duration="4500">
                            <h5 className="text-primary">Testimonials</h5>
                        </div>
            <div className="wrap">
                <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
                <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
                <ul id="testim-dots" className="dots">
                    <li className="dot active"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                </ul>
                <div id="testim-content" className="cont" data-aos="fade-up" data-aos-duration="4500">
                    <div className="active">
                        <div className="img"><img src={img1} alt="" /></div>
                        <h2>Lorem P. Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div>
                        <div className="img"><img src={img2} alt="" /></div>
                        <h2>Mr. Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div>
                        <div className="img"><img src={img3} alt="" /></div>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div>
                        <div className="img"><img src={img1} alt="" /></div>
                        <h2>Lorem De Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div>
                        <div className="img"><img src={img2} alt="" /></div>
                        <h2>Ms. Lorem R. Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Testimonial1;
