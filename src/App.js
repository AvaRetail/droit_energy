import React from 'react';
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

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
       <Top />
      <Navbar />
      <Carousel />
      {/* <Feature /> */}
      <About />
      <Featurewhy />
      <Mission />
      <Services />
      <Whatwedo />
      <Whydroit />
      
      <Cleaner />
      {/* <Projects /> */}
      <Quote />
      {/* <Testimonial /> */}
      {/* <Footer /> */}
      <Footer1 />
      {/* Back to Top Button */}
      <button onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
