import React, { useRef, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { TweenMax, Power4, TimelineLite, Expo } from "gsap";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "swiper/swiper.scss"
import "swiper/swiper-bundle.css"
import "./Gsap12.scss";
import {Swiper, Navigation,Pagination } from "swiper";

const Gsap12 = () => {
    useEffect(()=>{
        Swiper.use([Navigation,Pagination])
        var slider = new Swiper(".swiper-container", {
            slidesPerView:"auto",
            spaceBetween: 150,
            centeredSlides: true,
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
              },
              scrollbar: {
                el: '.swiper-scrollbar',
              },
          })
          slider.on('slideChange', function () {
            TweenMax.to('.slide-text span', .2, {
              y: '-100px',
            })
            TweenMax.to('.slide-number span', .2, {
              x: '-100px',
            })
            TweenMax.to('.swiper-slide-active', .5, {
              scale: .85
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
            <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <div class="slide-number">
            <p><span>001</span></p>
          </div>
          <div class="slide-text">
            <h4><span>tokyotr3</span></h4>
          </div>
          <div class="slide-img"></div>
        </div>

        <div class="swiper-slide">
          <div class="slide-number">
            <p><span>002</span></p>
          </div>
          <div class="slide-text">
            <h4><span>tokyogu4</span></h4>
          </div>
          <div class="slide-img"></div>
        </div>

        <div class="swiper-slide">
          <div class="slide-number">
            <p><span>003</span></p>
          </div>
          <div class="slide-text">
            <h4><span>tokyotv2</span></h4>
          </div>
          <div class="slide-img"></div>
        </div>

        <div class="swiper-slide">
          <div class="slide-number">
            <p><span>004</span></p>
          </div>
          <div class="slide-text">
            <h4><span>tokyort7</span></h4>
          </div>
          <div class="slide-img"></div>
        </div>

        <div class="swiper-slide">
          <div class="slide-number">
            <p><span>005</span></p>
          </div>
          <div class="slide-text">
            <h4><span>tokyogr8</span></h4>
          </div>
          <div class="slide-img"></div>
        </div>


      </div>
      <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>

    </div>
    <footer class="footer12">
      <div class="footer-wrapper12">
        <div class="share12">
          <p>share</p>
        </div>
        <div class="more12">
          <p>full project</p>
        </div>
        <div class="scroll12">
          <p>scroll</p>
        </div>
      </div>
    </footer>

  </div>
           
           
        </body>
    )
}


export default Gsap12