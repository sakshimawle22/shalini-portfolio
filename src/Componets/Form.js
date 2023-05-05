import React from 'react'
import '../App.css'
import  './Form.css'
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWordpress ,BsAlipay,BsFillAwardFill} from "react-icons/bs";

function Form() {
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
    <div className='container-fluid mainimg mt-5'>
        <div className='container pt-5 'data-aos="zoom-in">
            <div className='row section p-5 '>
                <div className='col '>
                  <h2 className='headfont'>Send Message Us</h2>
                  <hr className='underline'/>
                  <input type="text" class="form-control" id=" Your Name" placeholder=" Your Name" name=" YourName"></input><br/>
                  <input type="text" class="form-control" id="your Email" placeholder="your Email" name="your Email"></input><br/>
                  <input type="Subject" class="form-control" id="sub" placeholder="subject" name="sub"></input><br/>
                  <textarea class="form-control" rows="5" id="Message" name="Message"></textarea>
                  <button type="button" class="btn btn-primary mt-5 rounded-30">Send Message</button>
                  
                </div>
                <div className='col'>
                  <h2 className='headfont'>Get in Touch</h2>
                  <hr className='underline'/>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore? "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                  <ul>
                    <li>New indira colony burhanpur(M.P)</li>
                    <li>(+91)7415192668</li>
                    <li>shalinimawle259@gmail.com</li>
                  </ul>
                  <div className='row w-50'data-aos="flip-up">
                      <div className='col'data-aos="flip-up"><BsFacebook style={{ fontSize: '2em',color:'#0078ff'}} /></div>
                      <div className='col'data-aos="flip-up"><BsInstagram style={{ fontSize: '2em',color:'#0078ff'}} /></div>
                      <div className='col'data-aos="flip-up"><BsTwitter style={{ fontSize: '2em',color:'#0078ff'}}/></div>
                      <div className='col'data-aos="flip-up"><BsLinkedin style={{ fontSize: '2em',color:'#0078ff'}}/></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form