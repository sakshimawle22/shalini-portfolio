import React from 'react'
import AOS from 'aos';
import '../App.css'
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";

function Myservices() {
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
  return (
    <>
    <div className='container'>
        <div className='row text-center mt-5'>
            <h2 className='headfont'>SERVICES</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='col-sm shadow-sm m-2'>
               
            <div className="card border-0" data-aos="flip-left">
            
                <div className="card-body">
                <BsWordpress style={{ fontSize: '5em'}}/>
                    <img src=''/>
                    <h3 className='text-center headfont pt-4'>WEB DESIGN</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='col-sm shadow-sm m-2'>
            <div className="card border-0" data-aos="flip-left">
                <div className="card-body">
                    <BsAlipay  style={{ fontSize: '5em'}}/>
                    <h3 className='text-center headfont pt-4'>WEB DEVELOPMENT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='col-sm shadow-sm m-2'>
            <div className="card border-0"data-aos="flip-left">
                <div className="card-body">
                    <BsFillAwardFill style={{ fontSize: '5em'}}/>
                  
                    <h3 className='text-center headfont pt-4'>RESPONSIVE DESIGN</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Myservices;