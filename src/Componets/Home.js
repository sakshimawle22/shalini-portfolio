import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";
import './Home.css'

function Home() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
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
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Devoloper",  "Website Desigen", "Freelancer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid hero">
        <div className='row'>
          <img className="mx-auto d-block" style={{width:'45%'}} src="shalini01.png" alt="woman" data-aos="zoom-in"/>
        </div>
        <div className='row text-center'>
          <h1 className='headfont text-white' style={{fontSize:'5vw'}}>I am Shalini Mawle</h1>
          <h1 className='headfont text-white' style={{fontSize:'5vw'}}><span ref={el}></span></h1>
        </div>
    </div> 
  )
}

export default Home;