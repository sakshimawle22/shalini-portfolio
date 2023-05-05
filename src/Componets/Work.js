import React from 'react';
import AOS from 'aos';
import '../App.css';
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";

function Work() {
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
            <h2 className='headfont'>Portfolio</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='col mt-5'>
                <div  className='card border-0 box-Larger shadow'data-aos="flip-up">
                    <div className='card-body'>
                        <img src='project01.png' style={{width: "350px"}}/>
                        <h4>Ecoomerce-Templete</h4>
                        Web Design / 18 Sep. 2023
                    </div>
                </div>
            </div>
            <div className='col mt-5'>
                <div className='card border-0 Larger shadow' data-aos="flip-up">
                <div className='card-body'>
                    <img src='netflix.png'style={{width: "350px"}}/>
                    <h4>Netflix-website</h4>
                    Web Design / 18 march .2023
                    </div>
                </div>
            </div>
            <div className='col mt-5'>
               <div className='card border-0 Larger shadow' data-aos="flip-up">
                <div className='card-body'>
                <img src='yummy.png'style={{width: "350px"}}/>
                <h4>Resturant-website</h4>
                Web Design / 10 may 2023
                </div>
               </div>
            </div>
            <div className='row '>
                <div className='col mt-5'>
                    <div className='card border-0 Larger shadow'data-aos="flip-down">
                        <div className='card-body '>
                        <img src='https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-4.jpg'style={{width: "350px"}}/>
                        <h4>Bindo Laro Cado</h4>
                        Web Design / 18 Sep. 2022

                        </div>

                    </div>
                </div>
                <div className='col mt-5'>
                    <div className='card border-0 Larger shadow'data-aos="flip-down">
                        <div className='card-body'>
                        <img src='https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-6.jpg'style={{width: "350px"}}/>
                        <h4>Studio Lena Mado</h4>
                        Web Design / 18 Sep. 2022
                        </div>
                    </div>
            </div>
            <div className='col mt-5'>
                <div className='card border-0 Larger shadow'data-aos="flip-down">
                    <div className='card-body'>
                    <img src='https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-5.jpg'style={{width: "350px"}}/>
                    <h4>Studio Big Bang</h4>
                    Web Design / 18 Sep. 2023
                    </div>
                </div>
            </div>    
            </div>
        </div>
    </div>

    </>
  )
}

export default Work;