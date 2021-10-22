import React, { useRef,useEffect } from "react";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { TweenMax, Power3, TimelineLite,Expo} from "gsap";
import {Link} from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";


import "./Gsap10.scss"
import { width } from "dom-helpers";
const Gsap10=()=>{
    useEffect(()=>{
TweenMax.from(".left10",1.6,{
    delay:0.6,
    width:0,
    ease:Expo.easeInOut,
})
TweenMax.from(".right10",1.6,{
    delay:0.6,
    width:0,
    ease:Expo.easeInOut,
})
TweenMax.from(".logo10",1,{
    delay:1,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".menu10",1,{
    delay:1.2,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".catagory10",1,{
    delay:1.4,
    opacity:0,
    x:-150,
    ease:Expo.easeInOut,
})
TweenMax.from(".search10",0.8,{
    delay:1.6,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".bag10",1,{
    delay:1.8,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.staggerFrom(".media10 ul li",1,{
    delay:2,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
},0.08)

TweenMax.staggerFrom(".size10 ul li",1,{
    delay:2,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
},0.08)
TweenMax.staggerFrom(".dot10",1,{
    delay:2,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
},0.08)
TweenMax.from(".size10",1,{
    delay:1.8,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".dots10",1,{
    delay:1.8,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".bottomnav10",1,{
    delay:2.4,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut,
})
TweenMax.from(".product_img10",3,{
    delay:2.2,
    opacity:0,
    y:20,
    ease:Expo.easeInOut,
})
TweenMax.from(".product_title10",3,{
    delay:2.4,
    opacity:0,
    y:50,
    ease:Expo.easeInOut,
})
TweenMax.from(".product_sub10",3,{
    delay:2.4,
    opacity:0,
    y:50,
    ease:Expo.easeInOut,
})
    }
    )
    return(
        <body className="Gsap10">
            <div className="wrapper10">
                <div className="left10">

                </div>
                <div className="right10">

                </div>
                <div className="strips10">
                    <div className="left_strip10">

                    </div>
                    <div className="right_strip10">

                    </div>
                </div>
                <div className="nav10">
                    <div className="logo10">
                        levi's <span className="reg10"></span>
                    </div>
                    <div className="menu10">
                    <AiOutlineMenu/>
                    </div>
                    <div className="catagory10">
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                    </div>
                    <div className="search10">
                        <FaSearch className="icon10"/>
                    </div>
                    <div className="bag10">
                        <FaShoppingCart className="icon10"/>
                    </div>
                </div>
                <div className="media10">
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instegram</li>
                    </ul>
                </div>
                <div className="size10">
                <ul>
                <span>Size:</span>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
                </div>
                <img src="https://github.com/codicts/Levis-Landing-Page/blob/master/levi-shirt.png?raw=true" alt="" className="product_img10" />
            <div className="product_text10">
                <h1 className="product_title10">color Black 
                </h1>

                    <p className="product_sub10">
                    full sleave t-shirt
                    </p>
            </div>
            <div className="dots10">
                <div className="dot10"></div>
                <div className="dot10"></div>
                <div className="dot10"></div>
                <div className="dot10"></div>
            </div>
            <div className="bottomnav10">
                <div className="bottomnav_img10">
                </div>

                    <ul>
                    <Link to="/"> <li><FiArrowLeft/></li></Link>
                        <Link to="Gsap11"> <li><FiArrowRight/></li></Link>
                    </ul>
            </div>
            </div>
        </body>
    )

}

export default Gsap10;