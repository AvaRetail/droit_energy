
import React, {useEffect} from "react";
// import { Link } from "react-scroll";
// import './Navbar.css';
import { useSpring, animated } from 'react-spring';


function Top() {
// Define animation properties using useSpring hook
// const props = useSpring({
//     from: { opacity: 0, transform: 'translateX(100%)' },
//     to: { opacity: 1, transform: 'translateX(0)' },
//     config: { duration: 1000 }
//   });
  
  
  return (
    // <animated.div id="top" className="container-fluid bg-dark p-0" style={props}>
    <animated.div id="top" className="container-fluid bg-dark p-0">
    <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-map-marker-alt text-white me-2"></small>
                <small className="text-white">3280 B street suite C, Auburn, WA 98001.</small>
            </div>
            {/* <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-map-marker-alt text-primary me-2"></small>
                <small><p><i className="fa fa-globe me-3"></i>India</p></small>
            </div> */}
            {/* <div className="h-100 d-inline-flex align-items-center">
                <small className="far fa-clock text-primary me-2"></small>
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div> */}
        </div>
        <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-phone-alt me-2 text-white"></small>
                <small className="text-white">(+1) 425 522 4037</small>
            </div>
            {/* <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-phone-alt text-primary me-2"></small>
                <small>(+91) 89288 62707 (WhatsApp)</small>
            </div> */}
            <div className="h-100 d-inline-flex align-items-center mx-n2">
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-white" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-white" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-white" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-square btn-link rounded-0 border-0 text-white" href="" ><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
</animated.div>
  );
}
export default Top;
