import React, { useRef, useEffect,useState } from "react";
import gsap,{ TweenMax, Power3, TimelineMax, Expo} from "gsap";
import { Link } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
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
const animation=anime({
    targets:'.react3',
    translateX:500,
    duration:6000,
    easing:'linear'
})
document.getElementById('pause15').onclick=animation.pause
document.getElementById('play15').onclick=animation.play
document.getElementById('restart15').onclick=animation.restart
document.getElementById('reverse15').onclick=animation.reverse
const progress15 = document.getElementById('progress15')

progress15.oninput=function(){
console.log(progress15.value);

animation.seek(animation.duration * (progress15.value / 100));}
    })
    return (
        <section className='Gsap15'>
            <div className="react3" id="react31"></div>
            <div className="react3" id="react32"></div>
            <div className="react3" id="react33"></div>
            <div><button id="pause15">pause</button></div>
            <div><button id="play15">play</button></div>
            <div><button id="restart15">restart</button></div>
            <div><button id="reverse15">reverse</button></div>
            <input type='range' id='progress15' step='0.001' min='0' max='100' />
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
        </section>
    )
}
export default Gsap15;
