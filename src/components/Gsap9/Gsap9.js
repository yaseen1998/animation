import React, { useRef,useEffect } from "react";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { TweenMax, Power3, TimelineLite } from "gsap";

import "./Gsap9.scss"

const Gsap9=()=>{
    useEffect(()=>{
        console.log(document.getElementById('scene9'))
        TweenMax.from('.logo9',1,{
           opacity:0,
           x:-20,
           ease:Power3.easeInOut 
        })
        TweenMax.staggerFrom('.menu_links9 ul li',1,{
           opacity:0,
           x:-20,
           ease:Power3.easeInOut 
        },0.1)
        TweenMax.from('.search9',1,{
            delay:0.5,
            opacity:0,
            x:-20,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.account9',1,{
            delay:0.7,
            opacity:0,
            x:-20,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.cart9',1,{
            delay:0.9,
            opacity:0,
            x:-20,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.juice9',1,{
            delay:2,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.leaves9 .layer9:nth-child(1)',1,{
            delay:2.2,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.leaves9 .layer9:nth-child(2)',1,{
            delay:2.3,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.leaves9 .layer9:nth-child(3)',1,{
            delay:2.4,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.leaves9 .layer9:nth-child(4)',1,{
            delay:2.5,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.leaves9 .layer9:nth-child(5)',1,{
            delay:2.5,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.title9',1,{
            delay:1,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.tagline9',1,{
            delay:1.3,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.pages9',1,{
            delay:1.6,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.more9',1,{
            delay:1.8,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
         TweenMax.from('.desc9',1,{
            delay:1.8,
            opacity:0,
            y:-800,
            ease:Power3.easeInOut 
         })
    }
    )
    return(
        <body >
            <div className="wrapper9">
                <div className="nav9">
                    <div className="logo9">clean juice</div>
                        <div className="menu_links9">
                            <ul>
                                <li>location</li>
                                <li>our menu</li>
                                <li>our story</li>
                                <li>meet our teem</li>
                                <li>own a clean juices</li>
                            </ul>
                        </div>
                        <div className="search9"><FaSearch/></div>
                        <div className="account9">my account</div>
                        <div className="cart9"><FaShoppingCart/></div>
                    
                    </div>
                    <div className="content9">
                        <div className="tagline9">find your clean juice</div>
                        <div className="pages9"><span>2</span>21</div>
                        <div className="title9">orange</div>
                        <div className="more9"><a href="#">show all the juices</a></div>
                        <div className="desc9">
                            <p>
                                your <span>healthy</span>life <br />
                                starts here with us
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Adipisci sapiente tempora minima quo saepe tenetur officiis tempore
                                 , repudiandae nobis, doloremque culpa quae eos perferendis 
                            </p>
                        </div>
                    </div>
                <div className="juice9"><img src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/juice.png?raw=true" alt="" /></div>
                <div className="leaves9">
                <ul id="scene9">
                    <li className="layer9"><img data-depth="-.1" src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/leaf01.png?raw=true" alt="" /></li>
                    <li className="layer9"><img data-depth="-.3" src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/leaf02.png?raw=true" alt="" /></li>
                    <li className="layer9"><img data-depth="-1.5" src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/leaf03.png?raw=true" alt="" /></li>
                    <li className="layer9"><img data-depth=".1" src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/leaf04.png?raw=true" alt="" /></li>
                    <li className="layer9"><img data-depth=".3" src="https://github.com/codicts/Clean-Juice-Landing-Page/blob/master/img/leaf05.png?raw=true" alt="" /></li>
                </ul>
                </div>
                <div className="arrow9">
                    <button className="prev9"><FiArrowLeft/></button>
                <button className="next9"><FiArrowRight/></button>
                </div>
            </div>
            {/* {
                console.log(document.getElementById('scene9')),
                console.log('hello')
                
            } */}
        </body>
    )
}
export default Gsap9;