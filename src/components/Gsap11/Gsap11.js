import React, { useRef, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { TweenMax, Power3, TimelineLite, Expo } from "gsap";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import "./Gsap11.scss";
import { width } from "dom-helpers";
const Gsap11 = () => {
    useEffect(()=>{
        TweenMax.from(".left-container11", 2, {
            width: "0",
            ease: Expo.easeInOut
          });
          TweenMax.from(".right-container11", 2, {
            delay: 1.5,
            width: "0",
            opacity: "0",
            ease: Expo.easeInOut
          });
          TweenMax.from(".center-container11", 2, {
            delay: 3,
            width: "0",
            x: -20,
            ease: Expo.easeInOut
          });
          TweenMax.from(".logo11", 2, {
            delay: 1.5,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
          });
          TweenMax.from(".info11", 2, {
            delay: 1.5,
            y: 50,
            opacity: 0,
            scale: 2.5,
            ease: Expo.easeInOut
          });
          TweenMax.from(".story11", 2, {
            delay: 2.5,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
          });
          TweenMax.from(".menu11", 2, {
            delay: 3.5,
            y: 20,
            opacity: 0,
            rotation: 90,
            ease: Expo.easeInOut
          });
          TweenMax.staggerFrom(
            ".social11 ul",
            2,
            {
              delay: 3.8,
              opacity: 0,
              y: 20,
              ease: Expo.easeInOut
            },
            0.1
          );
    })
  return (
    <body className="Gsap11">
      <div className="container11">
        <div className="left_container11">
          <div className="logo11">INFNT</div>
          <div className="info11">
            <a href="">FAQ</a>
            <a href="">Help</a>
          </div>
        </div>
        <div className="right_container11">
          <div className="first_block"></div>
          <div className="menu_container11">
            <div className="menu11">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="story11">
              <h1>Our Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Labore quidem excepturi non officiis error suscipit ipsa nemo maiores. Delectus, veniam?</p>
              <p>Read More</p>
          </div>
          <div className="social_container11">
              <li className="social11">
                  <ul>facebook</ul>
                  <ul>twitter</ul>
                  <ul>instegram</ul>
              </li>
          </div>
        </div>
        <div className="center_container11"></div>
      </div>
    </body>
  );
};

export default Gsap11;
