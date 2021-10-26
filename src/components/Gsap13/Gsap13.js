import React, { useRef, useEffect } from "react";
import { TweenMax, Power3, TimelineMax, Expo,TimelineLite } from "gsap";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF,FaTwitter ,FaInstagram} from "react-icons/fa";
import "./Gsap13.scss"


const Gsap13 = () => {
    // document.addEventListener('DOMContentLoaded', () => {
    //     let timeline1 = new TimelineMax();
    //     timeline1
    //         .from('.navbar13', 1.5, {
    //             y: 30,
    //             ease: Power3.easeInOut
    //         })
    //     })
    
    useEffect(()=>{
        let nav = document.getElementById('bottom-nav13');
        let home = document.getElementById('home13');

        TweenMax.from('.title13',1.5,{
            delay:0.2,
            y:200,
            ease:Power3.easeInOut
        })
        TweenMax.from('.navbar13',1,{
            delay:0.2,
            y:30,
            ease:Power3.easeInOut,
            autoAlpha:0
            
        },'-=1')
        TweenMax.from('.sub_title13',1,{
            delay:0.8,
            y:30,
            ease:Power3.easeInOut,
            autoAlpha:0
            
        })
        TweenMax.from('.bottom_nav13',2,{
            width:"0%",
            ease:Power3.easeInOut,
            autoAlpha:0
            
        },'-=2')
        nav.addEventListener('click', () => {
            console.log('you click me');
            let timeline2 = new TimelineMax()
        timeline2
            .set('.grid13', {
                display: 'grid',
            })
            .to('.forest13 img', 3, {
                y: -400,
                scale: 1.1,
                ease: Expo.easeInOut
            })
            .to('.bg-image13', 3, {
                y: -600,
                ease: Expo.easeInOut
            }, '-=3')
            .to('.sub_title13', 3, {
                autoAlpha: 0,
                y: -100,
                ease: Expo.easeInOut
            }, '-=3')
            .to('.bottom_nav13', 3, {
                width: '0%',
                ease: Expo.easeInOut
            }, '-=3')
            .to('.navbar13', 3, {
                color: '#fff',
            }, '-=3')
            .to('.imgs13', 2, {
                height: '100%',
                ease: Expo.easeInOut
            }, '-=2')
            .to('.imgs-213', 2, {
                height: '100%',
                ease: Expo.easeInOut
            }, '-=1.8')
            .to('.imgs-313', 2, {
                height: '100%',
                ease: Expo.easeInOut
            }, '-=1.7')
            .to('.imgs-413', 2, {
                height: '100%',
                ease: Expo.easeInOut
            }, '-=1.6')
            .to('.destination13', 2, {
                // autoAlpha: 1,
                y: -20,
                ease: Expo.easeOut
            }, '-=1.6');
            home.addEventListener('click', ()=>{
                timeline2.reverse();
            })
        })
            
    })
    return (
        <section className="Gsap13">
            <nav className='navbar13'>
                <div className="left13">
                    <ul>
                        <li id="home13"><AiOutlineHome/> Home</li>
                    </ul>
                </div>
                <div className="middle13">
                    <h4>WEBSITE<br/>DESIGN<br/>COMPANY</h4>
                </div>
                <div className="right13">
                    <ul>
                       <Link to='Gsap14'> <li><FaFacebookF/></li></Link>
                        <li><FaTwitter/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            </nav>
            <div className="container13">
                <div className="title13">
                    <h1><span className="black13">DESTINATION</span> <span className="outlined13">UNKNOWN</span></h1>
                </div>
                <div className="forest13">
                    <img src="https://github.com/vaibhav2110/Destination-Unknown-GSAP-/blob/master/img/forest.png?raw=true" alt="Forest"/>
                </div>
                <div className="desc13">
                    <p className="sub_title13">We challenged our friends around the globe to show us their destination unknowns. Share yours for a chance of winning your dream destination unknown trip.</p>
                    <div className="bottom_nav13" id="bottom-nav13">
                        <h4>EXPLORE DESTINATION</h4>
                        <div className="circle13"></div>
                    </div>
                </div>
                <div className="grid13">
                    <h1 className="destination13">OESCHINEN LAKE<br/><span className="outlined13 white_outline13">SWITZERLAND</span></h1>
                    <div className="imgs13">
                        <div className="img-wrapper13 first-img13">
                        </div>
                    </div>
                    <div className="imgs-213">
                        <div className="img-wrapper13 second-img13">
                        </div>
                    </div>
                    <div className="imgs-313">
                        <div className="img-wrapper13 third-img13">
                        </div>
                    </div>
                    <div className="imgs-413">
                        <div className="img-wrapper13 forth-img13">
                        </div>
                    </div>
                </div>
                <div className="bg-image13"></div>
            </div>
        </section>
    )
}
export default Gsap13