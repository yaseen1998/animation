import React, { useRef, useEffect } from "react";
import { TweenMax, Power4, TimelineLite, Expo } from "gsap";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF,FaTwitter ,FaInstagram} from "react-icons/fa";
import "./Gsap13.scss"


const Gsap13 = () => {
    return (
        <section className="Gsap13">
            <nav className='navbar13'>
                <div className="left13">
                    <ul>
                        <li id="home"><AiOutlineHome/> Home</li>
                    </ul>
                </div>
                <div className="middle13">
                    <h4>WEBSITE<br/>DESIGN<br/>COMPANY</h4>
                </div>
                <div className="right13">
                    <ul>
                        <li><FaFacebookF/></li>
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
                    <div className="bottom_nav13" id="bottom-nav">
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