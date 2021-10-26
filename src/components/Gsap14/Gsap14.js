import React, { useRef, useEffect,useState } from "react";
import gsap,{ TweenMax, Power3, TimelineMax, Expo} from "gsap";
import { Link } from "react-router-dom";
import ScrollMagic from 'scrollmagic';
import "./Gsap14.scss";
// import { Controller, Scene } from 'react-scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const Gsap14 = () => {
    
    
      useEffect(() => {
        let controller = new ScrollMagic.Controller();

        let timeline = new TimelineMax();
        timeline
        .to('#sixth14', 6, {
            y: -700
        })
        .to('#fifth14', 6, {
            y: -500
        }, '-=6')
        .to('#forth14', 6, {
            y: -400
        }, '-=6')
        .to('#third14', 6, {
            y: -300
        }, '-=6')
        .to('#second14', 6, {
            y: -200
        }, '-=6')
        .to('#first14', 6, {
            y: -100
        }, '-=6')
        .to('.content14, .blur14', 6, {
            top: '0%'
        }, '-=6')
        .to('.title14, navbar14, .footer-wrapper14', 6, {
            y: -600,
        }, '-=6')
        .from('.one14', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=4')
        .from('.two14', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.three14', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.four14', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.text14', 3, {
            y: 60,
            autoAlpha: 0
        }, '-=4')
    
        let scene = new ScrollMagic.Scene({
            triggerElement: '.Gsap14',
            duration: '200%',
            triggerHook: 0
        })
        .setTween(timeline)
        .setPin('.Gsap14')
        .addTo(controller);
       
      }, []);
  return (
    <section className="Gsap14">
      <nav className="navbar14">
        <div className="nav-wrapper14">
          <h4>REady co.</h4>
          <a className="button14" href="#">
            Signup
          </a>
        </div>
      </nav>
      <div className="container14">
      <div class="title14">Nature.</div>
        <div className="images14">
          <div className="image-wrapper14" id='first14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/6.png?raw=true"
              alt=""
            />
          </div>
          <div className="image-wrapper14" id='second14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/5.png?raw=true"
              alt=""
            />
          </div>
          <div className="image-wrapper14" id='third14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/4.png?raw=true"
              alt=""
            />
          </div>
          <div className="image-wrapper14" id ='forth14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/3.png?raw=true"
              alt=""
            />
          </div>
          <div className="image-wrapper14" id='fifth14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/2.png?raw=truehttps://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/2.png?raw=true"
              alt=""
            />
          </div>
          <div className="image-wrapper14"  id='sixth14'>
            <img
              src="https://github.com/vaibhav2110/GSAP-ScrollMagic/blob/master/img/1.png?raw=true"
              alt=""
            />
          </div>
          <div className="blur14"></div>
        </div>
        <footer className="footer-wrapper14">
          <ul>
            <li>Instegram</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Twitter</li>
          </ul>
        </footer>
        <div className="content14">
          <div className="content-wrapper14">
            <div className="content-images14">
              <div className="content-image-wrapper14 one14">
                <img src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <h4>W</h4>
              </div>
              <div className="content-image-wrapper14 two14">
                <img src="https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>E</h4>
              </div>
              <div className="content-image-wrapper14 three14">
                <img src="https://images.unsplash.com/photo-1550364387-ffbad4f8e9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>S</h4>
              </div>
              <div className="content-image-wrapper14 four14">
                <img src="https://images.unsplash.com/photo-1550183203-8d3ca82400c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h4>T</h4>
              </div>
            </div>
            <p className="text14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gsap14;
