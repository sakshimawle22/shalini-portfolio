import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";


function About
() {
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
        <div className='container shadow-lg mt-5 p-5'data-aos="flip-right">
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img src='profile.png'width="100%"/>
                        </div>
                        <div className='col-sm-8'>
                            <ul>
                                <li><b>Name: </b>Shalini Mawle</li>
                                <li><b>Profile: </b>Web Devloper</li>
                                <li><b>Email: </b>shalinimawle259@gmail.com</li>
                                <li><b>Phone: </b>(+91)7415192668</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row p-2'>
                    <h2>Skills</h2>
                        <div className='col-10'>
                            <p className='my-1 pt-2'>HTML</p>
                            <ProgressBar now={90} label={`${90}%`} />
                            <p className='my-1 pt-2'>CSS</p>
                            <ProgressBar now={80} label={`${80}%`} />
                            <p className='my-1 pt-2'>JavaScript</p>
                            <ProgressBar now={65} label={`${65}%`} />
                            <p className='my-1 pt-2'>React</p>
                            <ProgressBar now={60} label={`${60}%`} />
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='headfont'>About me</h2>
                    <hr className='underline'/>
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>                      
                </div>
            </div>
        </div>
    </>
  )
}
export default About
