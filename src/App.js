import React, { useState, useEffect } from 'react';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import How from './components/How';
import Whygeothermal from './components/Whygeothermal';
import Cleaner from './components/Cleaner';
import Mission from './components/Mission';
import Whydroit from './components/Whydroit';
import Whatwedo from './components/Whatwedo';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import News from './components/News';
import Partners from './components/Partners';
import Quote from './components/Quote';
import Footer1 from './components/Footer1';

import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll
import './App.css';
import Feature from './components/Feature';

function App() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    // If scroll percentage is greater than or equal to 50%, show the arrow pointing up, else show the arrow pointing down
    setShowArrow(scrollPercentage >= 50);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom=()=>{
    scroll.scrollToBottom();
  }
  return (
    <div>
       {/* <Top /> */}
      <Navbar />
      <Carousel />
      
      <About />
      <How />
      
      <Whygeothermal />
      <Cleaner />
      <Mission />

      <Whydroit />
      <Whatwedo />
      
      {/* <Team />
      <Testimonial /> */}
      
      {/* <News />
      <Partners /> */}
      
      <Quote />
      {/* <Footer /> */}
      <Footer1 />
      {/* Back to Top Button */}
      <button onClick={showArrow ? scrollToTop : scrollToBottom} className="btn btn-lg-square rounded-circle back-to-top">
        <i className={`bi bi-arrow-${showArrow ? 'up' : 'down'}`}></i>
      </button>
    </div>
  );
}

export default App;
