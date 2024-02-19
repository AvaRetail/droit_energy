
import React, {useEffect,useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../img/logo.png"
import { Link } from "react-scroll";
import { useSpring, animated } from 'react-spring';
// import { Link } from "react-scroll";
// import './Navbar.css';
function Navbar() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
      // Define animation properties using useSpring hook
      const props = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 }
      });
      
    
  return (
    <animated.nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" style={props} >
            <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <img src={logo} height="75px" width="185"/>
            </a>
            <button className="navbar-toggler me-4" type="button" onClick={toggleDropdown}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link
                        className="nav-item nav-link"
                        to="mission_section"
                        spy={true}
                        smooth={true}
                        duration={50}
                        style={{cursor: "pointer"}}
                        onClick={closeDropdown} // Close menu on click
                    >
                        Our Mission
                    </Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleDropdown}>
                            Geothermal Energy
                        </a>
                        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="geothermalDropdown">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{cursor: "pointer"}}
                                    onClick={closeDropdown} // Close menu on click
                                >
                                    What is Geothermal Energy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="featurewhy"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{cursor: "pointer"}}
                                    onClick={closeDropdown} // Close menu on click
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{cursor: "pointer"}}
                                    onClick={closeDropdown} // Close menu on click
                                >
                                    Why Geothermal Energy
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <Link
                        className="nav-item nav-link"
                        to="whydroit"
                        spy={true}
                        smooth={true}
                        duration={50}
                        style={{cursor: "pointer"}}
                        onClick={closeDropdown} // Close menu on click
                    >
                        Why Us
                    </Link>
                    {/* <Link
                        className="nav-item nav-link"
                        to="quote"
                        spy={true}
                        smooth={true}
                        duration={50}
                        style={{cursor: "pointer"}}
                        onClick={closeDropdown} // Close menu on click
                    >
                        Contact Us
                    </Link> */}
                </div>
                <Link
                    className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
                    to="quote"
                    spy={true}
                    smooth={true}
                    duration={50}
                    style={{cursor: "pointer"}}
                    onClick={closeDropdown} // Close menu on click
                >
                    Contact Us
                    <i className="fa fa-arrow-right ms-3"></i>
                </Link>
            </div>
        </animated.nav>
  );
}
export default Navbar;
