import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import "./Gsap7.scss"

const Gsap7 = ()=>{
     
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
                    <li>facebook</li>
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

            <div className="distortion"></div>

        </div>
       
        </body>

    )


}
export default Gsap7;