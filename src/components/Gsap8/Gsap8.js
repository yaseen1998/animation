import React, { useRef,useEffect } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import "./Gsap8.scss"
import { FaPlay,FaFacebookF,FaTwitter ,FaInstagram} from "react-icons/fa";


const Gsap8 = ()=>{
    useEffect(()=>{
        TweenMax.to(".overlay8 h1",2,{
            opacity:0,
          y:-60,
          ease:Power3.easeInOut
        })
        TweenMax.to(".overlay8 span",2,{
            delay:0.3,
            opacity:0,
          y:-60,
          ease:Power3.easeInOut
        })
        TweenMax.to(".overlay8",2,{
            delay:1,
            top:"-100%",
          ease:Power3.easeInOut
        })
        TweenMax.from(".ellipse_container",1,{
            delay:2,
            opacity:0,
          ease:Power3.easeInOut
        })
        TweenMax.from(".yellow8",1,{
            delay:3.5,
            opacity:0,
          ease:Power3.easeInOut
        })
        TweenMax.from(".circle18",1,{
            delay:2.4,
            opacity:0,
          ease:Power3.easeInOut
        })
        TweenMax.from(".logo8",1,{
            delay:3,
            opacity:0,
            y:-100,
          ease:Power3.easeInOut
        })
        TweenMax.staggerFrom(".menu-links ul li",1,{
            delay:3.4,
            opacity:0,
            x:-100,
          ease:Power3.easeInOut
        },0.1)
        TweenMax.from(".scrolldown8",1,{
            delay:3,
            opacity:0,
            y:100,
          ease:Power3.easeInOut
        })
        TweenMax.from(".text8 .title",1,{
            delay:3,
            opacity:0,
            x:200,
          ease:Power3.easeInOut
        })
        TweenMax.from(".text8 p",1,{
            delay:3.4,
            opacity:0,
            x:200,
          ease:Power3.easeInOut
        })
        TweenMax.from(".watchnow",1,{
            delay:3.8,
            opacity:0,
            x:200,
          ease:Power3.easeInOut
        })
        TweenMax.staggerFrom(".media8 ul li",1,{
            delay:3.4,
            opacity:0,
            y:100,
          ease:Power3.easeInOut
        },0.1)
    })
return(
    <body className="Gsap8">
        <div className="overlay8">
            <h1>Reindeer</h1>
            <span>snow life</span>
        </div>
        <div className="wrapper">
            <div className="nav">
                <div className="logo8">
                <h1>
                    <span>rain <br/> dear</span>
                    <br />
                    snow life
                </h1>
                </div>
                <div className="menu-links">
                    <ul>
                        <li>home</li>
                        <li>snow life</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="scrolldown8">
                    
                    scroll
                </div>
            </div>
            <div className="text8">
                <div className="title">
                    reinder
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                     Nam saepe veniam, in quod a dolorum. Explicabo </p>
            </div>
            <div className="watchnow">
                <FaPlay className="faplay"/>
                <a href="#">watch now</a>
            </div>
            <div className="media8">
                <ul>
                    <li><FaFacebookF/></li>
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                </ul>
              

            </div>
            <div className="ellipse_container8">
                    <div className="ellipse8 thin8"></div>
                    <div className="ellipse8 thick8"></div>
                    <div className="ellipse8 yellow8"></div>
                    <div className="cirle18">
                        <span>
                            Meaceanas purus at
                        </span>
                    </div>
                    
                </div>
        </div>
    </body>
)
}
export default Gsap8;

