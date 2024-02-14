import logo from './logo.svg';
import './App.css';
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
// import './lib/owlcarousel/assets/owl.carousel.min.css'

function App() {
  return (
  <>
  <Top />
  <Navbar />
  <Carousel />
  {/* <Feature /> */}
  <About />
  <Services />
  <Featurewhy />
  <Team />
  {/* <Projects /> */}
  <Quote />
  {/* <Testimonial /> */}
  <Footer />
  </>
  );
}

export default App;
