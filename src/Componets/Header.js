import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";

function Header() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initclassNameName: 'aos-init', // className applied after initialization
    animatedclassNameName: 'aos-animate', // className applied on animation
    useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <div>    
           <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)"><span ><b>S</b></span><b>-Portfolio</b></a>
    <div className="collapse navbar-collapse " id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ">
          <a className="nav-link" href="javascript:void(0)">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}
export default Header;