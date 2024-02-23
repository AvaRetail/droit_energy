import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Carousel from './components/Carousel';
import Feature from './components/Feature';
import About from './components/About';
import Services from './components/Services';
import Featurewhy from './components/Featurewhy';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll
import Whydroit from './components/Whydroit';
import Cleaner from './components/Cleaner';
import Mission from './components/Mission';
import Whatwedo from './components/Whatwedo';
import './App.css';
import Footer1 from './components/Footer1';
import Testimonial1 from './components/Testimonial1';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Partners1 from './components/Partners1';

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
      {/* <Feature /> */}
      <About />
      <Featurewhy />
      <Services />
      <Cleaner />
      <Mission />

      <Whydroit />
      <Whatwedo />
      <Team />
      <Testimonial1 />
      {/* <Blog /> */}
      {/* <Partners /> */}
      <Projects />
      {/* <Partners /> */}
<Partners1 />
      <Quote />
      
      {/* <Testimonial /> */}
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
