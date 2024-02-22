import React, { useEffect, useRef } from 'react';
import img1 from '../img/testimonial-1.jpg';
import img2 from '../img/testimonial-2.jpg';
import img3 from '../img/testimonial-3.jpg';

function Testimonial1() {
    const testimonialRef = useRef(null);

    useEffect(() => {
        const testim = testimonialRef.current;
        const testimDots = Array.prototype.slice.call(testim.querySelectorAll(".dot"));
        const testimContent = Array.prototype.slice.call(testim.querySelectorAll(".cont > div"));
        const testimLeftArrow = testim.querySelector("#left-arrow");
        const testimRightArrow = testim.querySelector("#right-arrow");
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
            testimTimer = setTimeout(() => {
                playSlide(currentSlide += 1);
            }, testimSpeed);
        }

        function handleLeftArrowClick() {
            playSlide(currentSlide -= 1);
        }

        function handleRightArrowClick() {
            playSlide(currentSlide += 1);
        }

        function handleDotClick(index) {
            playSlide(index);
        }

        function handleKeyUp(e) {
            switch (e.keyCode) {
                case 37:
                    handleLeftArrowClick();
                    break;
                case 39:
                    handleRightArrowClick();
                    break;
                default:
                    break;
            }
        }

        function handleTouchStart(e) {
            touchStartPos = e.changedTouches[0].clientX;
        }

        function handleTouchEnd(e) {
            touchEndPos = e.changedTouches[0].clientX;
            touchPosDiff = touchStartPos - touchEndPos;

            if (touchPosDiff > 0 + ignoreTouch) {
                handleLeftArrowClick();
            } else if (touchPosDiff < 0 - ignoreTouch) {
                handleRightArrowClick();
            }
        }

        testimLeftArrow.addEventListener("click", handleLeftArrowClick);
        testimRightArrow.addEventListener("click", handleRightArrowClick);
        testimDots.forEach((dot, index) => {
            dot.addEventListener("click", () => handleDotClick(index));
        });
        document.addEventListener("keyup", handleKeyUp);
        testim.addEventListener("touchstart", handleTouchStart);
        testim.addEventListener("touchend", handleTouchEnd);

        playSlide(currentSlide);

        return () => {
            clearTimeout(testimTimer);
            testimLeftArrow.removeEventListener("click", handleLeftArrowClick);
            testimRightArrow.removeEventListener("click", handleRightArrowClick);
            testimDots.forEach((dot, index) => {
                dot.removeEventListener("click", () => handleDotClick(index));
            });
            document.removeEventListener("keyup", handleKeyUp);
            testim.removeEventListener("touchstart", handleTouchStart);
            testim.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <div className='bg-light'>
        <div className="container overflow-hidden my-2 px-lg-2 ml-5" >
        <div className="container about px-lg-0">
        <div className=" text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "600px"}}>
        <div className="title mb-3 cleaner-h2 pt-5" >
                            <h5 className="text-primary">Testimonials</h5>
                        </div>
                {/* <h1 className="mb-4">Experienced Team Members</h1> */}
            </div>

            <section id="testim" className="testim" ref={testimonialRef}>
            <div className="testim-cover">
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
                <div id="testim-content" className="cont">
                    
                    <div className="active">
                        <div className="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                        <h2>Lorem P. Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg" alt="" /></div>
                        <h2>Mr. Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="https://p16.muscdn.com/img/musically-maliva-obj/1627333501517830~c5_720x720.jpeg" alt="" /></div>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg" alt="" /></div>
                        <h2>Lorem De Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKLJe1Lrz2N3ufVSwQokSJ79jGBbIptXuVnsdxMmNUlE14ohwp&usqp=CAU" alt="" /></div>
                        <h2>Ms. Lorem R. Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                    </div>

                </div>

            </div>
         </div>
            </section>
        </div>
        </div>
        </div>
    );
}

export default Testimonial1;
