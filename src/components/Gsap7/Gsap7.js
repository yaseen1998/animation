import React, { useRef,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-router-dom";
import hoverEffect from 'hover-effect'
import { TweenMax, Power4, TimelineLite, Expo } from "gsap";


import "./Gsap7.scss"

const Gsap7 = ()=>{
    const sectionRef = useRef(null);

    useEffect(()=>{
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.distortion'),
            intensity: 0.2,
            angle:Math.PI/2,
            easing:Expo.easeInOut,
            // imagesRatio:1778 / 1000,
            image1:'https://static.tildacdn.com/tild6431-6435-4532-b532-343266313561/alice-and-dragon-398.png',
            image2: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMGhkJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            displacementImage: 'https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2018/04/1.jpg'
            // https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true
        });
    })
    return (
        <body className="Gsap7">
            
        <div className="wrapper">
            <nav className="navbar">
                <div className="menu">
                    <AiOutlineMenu/>
                </div>
                <div className="lang">eng</div>
                <div className="search">
                <FaSearch/>
                </div>
            </nav>

            <div className="media">
                <ul>
                <Link to="Gasp6" className="link8"><li>facebook</li></Link>

                    
                    <li>instegram</li>
                    <li>twitter</li>
                </ul>
            </div>
            
            <div className="text">
                <h1>buy and sel</h1>
                <h3>collection 2017</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quos magni dicta dolor ab incidunt assumenda autem minima sunt sint? Mollitia, beatae? Suscipit rem odio necessitatibus laudantium doloremque doloribus id.</p>

            </div>

            <div className="sponsore">
                <img src="https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480" alt="" />
            <p>official sponsore</p>
            </div>

            <div className="distortion" ref={sectionRef}></div>

        </div>
       
        </body>

    )


}
export default Gsap7;