import React, { useRef, useEffect } from "react";
import { TweenMax, Power4 } from "gsap";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "swiper/swiper.scss"
import "swiper/swiper-bundle.css"
import "./Gsap12.scss";

import {Swiper, Navigation,Pagination,Autoplay,Scrollbar} from "swiper";

const Gsap12 = () => {
    useEffect(()=>{
        Swiper.use([Navigation,Pagination,Autoplay,Scrollbar])

        var slider = new Swiper(".swiper-container", {
            autoplay:{
                "delay": 2500,
                "disableOnInteraction": false
              },
            slidesPerView:"auto",
            spaceBetween: 150,
            centeredSlides: true,
            mousewheel: true,
            speed: 100,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
            clickable: true,
            // renderBullet: function (index, classNameName) {

            //     return '<span className=\"' + classNameName + '\">' + (index + 1) + '</span>';
      
            //   }

              },
              scrollbar: {
                el: '.swiper-scrollbar',
              },})
          
          slider.on('slideChange', function () {
            TweenMax.to('.slide-text span', .2, {
              y: '-100px',
            })
            TweenMax.to('.slide-number span', .2, {
              x: '-100px',
            })
            TweenMax.to('.swiper-slide-active', .5, {
              scale: .85,
              
            })
          })
          slider.on('slideChangeTransitionEnd', function () {

            TweenMax.to('.slide-text span', .2, {
              y: 0,
              delay: .5
            })
            TweenMax.to('.slide-text span', 0, {
              y: '100px',
            })
          
            TweenMax.to('.slide-number span', .2, {
              x: 0,
              delay: .7
            })
            TweenMax.to('.slide-number span', 0, {
              x: '100px',
            })
          
            TweenMax.to('.swiper-slide-active', .5, {
              scale: 1,
              ease: Power4.easeOut,
            })
          
            TweenMax.to('.swiper-slide-active .slide-text', 0, {
              autoAlpha: 1
            })
            TweenMax.to('.swiper-slide-active .slide-number', 0, {
              autoAlpha: 1
            })
          
            TweenMax.to('.swiper-slide-next .slide-text', 0, {
              autoAlpha: 0
            })
            TweenMax.to('.swiper-slide-prev .slide-text', 0, {
              autoAlpha: 0
            })
          
            TweenMax.to('.swiper-slide-next .slide-number', 0, {
              autoAlpha: 0
            })
            TweenMax.to('.swiper-slide-prev .slide-number', 0, {
              autoAlpha: 0
            })
          })
          
          TweenMax.to('.swiper-slide-next .slide-text', 0, {
            autoAlpha: 0
          })
          TweenMax.to('.swiper-slide-prev .slide-text', 0, {
            autoAlpha: 0
          })
          
          TweenMax.to('.swiper-slide-next .slide-number', 0, {
            autoAlpha: 0
          })
          TweenMax.to('.swiper-slide-prev .slide-number', 0, {
            autoAlpha: 0
          })
          
          TweenMax.to('.swiper-slide', 0, {
            scale: .85,
          })
          
          TweenMax.to('.swiper-slide-active', 0, {
            scale: 1,
          })
                  })
          
          
    return(
        <body className="Gsap12">
            <div className="wrapper12">
            <nav className="navbar12">
                <div className="menu12"><AiOutlineMenu className="iconmenu12"/> menu</div>
                <div className="logo12">tokyo street</div>
                <div className="media12">
                    <ul>
                        <li><a href="#">fb</a></li>
                        <li><a href="#">ig</a></li>
                        <li><a href="#">tw</a></li>
                    </ul>
                </div>
            </nav>
            <div className="bg_text12">
                <h1>TOkyoyokyo</h1>
            </div>
            <div className="swiper-container">
      <div className="swiper-wrapper">

        <div className="swiper-slide">
          <div className="slide-number">
            <p><span>001</span></p>
          </div>
          <div className="slide-text">
            <h4><span>tokyotr3</span></h4>
          </div>
          <div className="slide-img"></div>
        </div>

        <div className="swiper-slide">
          <div className="slide-number">
            <p><span>002</span></p>
          </div>
          <div className="slide-text">
            <h4><span>tokyogu4</span></h4>
          </div>
          <div className="slide-img"></div>
        </div>

        <div className="swiper-slide">
          <div className="slide-number">
            <p><span>003</span></p>
          </div>
          <div className="slide-text">
            <h4><span>tokyotv2</span></h4>
          </div>
          <div className="slide-img"></div>
        </div>

        <div className="swiper-slide">
          <div className="slide-number">
            <p><span>004</span></p>
          </div>
          <div className="slide-text">
            <h4><span>tokyort7</span></h4>
          </div>
          <div className="slide-img"></div>
        </div>

        <div className="swiper-slide">
          <div className="slide-number">
            <p><span>005</span></p>
          </div>
          <div className="slide-text">
            <h4><span>tokyogr8</span></h4>
          </div>
          <div className="slide-img"></div>
        </div>


      </div>
      <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>

    </div>
    <footer className="footer12">
      <div className="footer-wrapper12">
        <div className="share12">
          <p>share</p>
        </div>
        <div className="more12">
          <p>full project</p>
        </div>
        <div className="scroll12">
        <Link to="Gsap13">
          <p>scroll</p>
          </Link>
        </div>
        
      </div>
    </footer>

  </div>
           
           
        </body>
    )
}


export default Gsap12