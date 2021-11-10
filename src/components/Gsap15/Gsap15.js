import React, { useRef, useEffect, useState } from "react";
import gsap, { TweenMax, Power3, TimelineMax, Expo } from "gsap";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import "./Gsap15.scss";
import { Pause } from "react-bootstrap-icons";

const Gsap15 = () => {
  // const [fName, setfName] = useState('');

  useEffect(() => {
    // anime({
    //     targets:'.react1',
    //     keyframes:[
    //         {translateX:500},
    //         {backgroundColor:'#ff1491'},
    //         {scaleX:2,duration:4000},
    //         {translateY:500},
    //     ],
    //     duration: 4000
    // })
    // anime({
    //         targets:'.react1',
    //     translateX:[
    //         {value:600,duration:1000},
    //         {value:300,duration:1000,delay:1000},
    //     ],
    //     translateY:[
    //         {value:600,duration:1000},
    //         {value:300,duration:1000,delay:1000},
    //     ],
    //     backgroundColor:[
    //         {value:'#000000'},
    //         {value:'#ff1491',delay:600},
    //     ]
    // })
    // anime({
    //     targets:'.react1',
    //     // translateX:500,
    //     translateX:anime.stagger([0,700])
    //     // delay:anime.stagger(1000,{direction:'reverse'})
    //     // delay:anime.stagger(1000,{from:'center'})
    //     // delay:anime.stagger(1000,{easing:'easeInQuad'})
    // })
    // anime({
    //     targets:'.react2',
    //     scale: [
    //         {value: .1, easing: 'easeOutSine', duration: 500},
    //         {value: 1, easing: 'easeInOutQuad', duration: 1200}
    //       ],
    // // translateY:anime.stagger(10,{grid:[11,7],from: 'center',axis:'x'}),
    // // translateX:anime.stagger(10,{grid:[11,7],from: 'center',axis:'y'}),
    //       delay: anime.stagger(200, {grid: [11,7], from: 'center'})
    //       //grid:[columns,row]
    // })
    // const timeline = anime.timeline({
    //     duration:1000,
    //     easing:'easeInSine',
    //     targets:'.react3'
    // })
    // timeline
    // .add({
    //     // targets:'#react31',
    //     translateX:500
    // }).add({
    //     // targets:'#react32',
    //     backgroundColor:'#00000'
    // },'-=400')
    // .add({
    //     // targets:'#react33',
    //     translateY:500,
    //     easing:'easeInOutExpo',

    // },200)
    const animeprogress15 = document.getElementById("animeprogress15");
    const animebegan15 = document.getElementById("animebegan15");
    const animecomplete15 = document.getElementById("animecomplete15");
    const loopbegan15 = document.getElementById("loopbegan15");
    const loopcomplete15 = document.getElementById("loopcomplete15");

    let lBegan = 0;
    let lComplete = 0;
    const animation = anime({
      targets: ".react3",
      translateX: 500,
      translateY: function () {
        return anime.random(100, 500);
      },
      duration: 6000,
      easing: "linear",
      loop: true,
      update: function (anime) {
        animeprogress15.innerHTML = Math.round(anime.progress) + "%";
      },
      begin: function (anime) {
        animebegan15.innerHTML = anime.began;
      },
      complete: function (anime) {
        animecomplete15.innerHTML = anime.completed;
      },
      loopBegin: function (anime) {
        lBegan++;
        loopbegan15.innerHTML = lBegan;
      },
      loopComplete: function (anime) {
        lComplete++;
        loopcomplete15.innerHTML = lComplete;
      },
      direction: "alternate",
      autoplay: false,
    });
    // animation.finished.then(function(){
    //     alert('animation finished')
    // })
    document.getElementById("pause15").onclick = animation.pause;
    document.getElementById("play15").onclick = animation.play;
    document.getElementById("restart15").onclick = animation.restart;
    document.getElementById("reverse15").onclick = animation.reverse;
    // document.getElementById('stopanime15').onclick=animation.remove('#react32')

    const progress15 = document.getElementById("progress15");

    progress15.oninput = function () {
      console.log(progress15.value);

      animation.seek(animation.duration * (progress15.value / 100));
    };
    const react31 = document.getElementById("react31");
    console.log(anime.get(react31, "width", "px"));
    anime.set("#react31", {
      opacity: 0.1,
    });

    // svg
    let path = anime.path("#demo-svg15 path");
    anime({
      targets: "#emoji15",
      translateX: path("x"),
      translateY: path("y"),
      easing: "linear",
      duration: 5000,
      loop: true,
    });
    anime({
      targets: "#demo2-svg15 polygon",
      points:[
          {value:"54 468 , 70 224 , 239 206 , 410 234 , 402 379 , 390 598 , 184 550 "},
          {value:"54 468 , 70 224 , 212 346 , 410 234 , 495 307 , 390 598 , 264 398 "}
      ],
      easing: "easeOutQuad",
      duration: 5000,
      loop: true,
      direction:'alternate'
    });
  });
  return (
    <section className="Gsap15">
      <div className="react3" id="react31"></div>
      <div className="react3" id="react32"></div>
      <div className="react3" id="react33"></div>
      <div>
        <button id="pause15">pause</button>
      </div>
      <div>
        <button id="play15">play</button>
      </div>
      <div>
        <button id="restart15">restart</button>
      </div>
      <div>
        <button id="reverse15">reverse</button>
      </div>
      <input type="range" id="progress15" step="0.001" min="0" max="100" />
      <p id="animeprogress15"></p>
      <p>
        anime has began: <span id="animebegan15"></span>
      </p>
      <p>
        anime has complete: <span id="animecomplete15"></span>
      </p>
      <p>
        loop has began: <span id="loopbegan15"></span>
      </p>
      <p>
        loop has complete: <span id="loopcomplete15"></span>
      </p>
      <div>
        <button id="stopanime15">stop square</button>
      </div>
      {/* <input type="text"  onChange={e => setfName(e.target.value)}/> */}
      {/* <div className="react1"> </div>
            <div className="react1"> </div>
            <div className="react1"> </div> */}
      {/* <div className="container15">
               
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
                <div className="react2"></div>
            </div> */}
      <div className="demo-wrapper15">
        <div id="emoji15">😎</div>
        <svg id="demo-svg15" width="1000" height="500">
          <path
            stroke="red"
            fill="none"
            d="M 106 316 L 195 94 L 310 310 L 354 70 L 416 181 L 539 47 L 591 266 L 755 55 L 808 413 Z"
          />
        </svg>
      </div>
      <svg className="" id="demo2-svg15" width="600" height="600">
        <polygon
          stroke="none"
          fill="red"
          points="54 468 , 70 224 , 239 206 , 410 234 , 402 379 , 390 598 , 184 550 "
        />
      </svg>
    </section>
  );
};
export default Gsap15;
