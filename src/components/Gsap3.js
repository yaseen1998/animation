import logo from '../logo.svg';
import '../App.css';
import {React,useRef,useEffect,useState} from 'react';
import { TweenMax,Power3,gsap } from 'gsap';


function Gsap3() {
 let circle=useRef(null)
 let circleRed=useRef(null)
 let circleBlue=useRef(null)
 let app =useRef(null)
 const [state,setState]=useState(false)
const expand=()=>{
  TweenMax.to(circleRed,.8,{width:200,height:200,ease:Power3.easeOut})
  setState(true)
}
const shrink=()=>{
  TweenMax.to(circleRed,.8,{width:75,height:75,ease:Power3.easeOut})
  setState(false)
}
useEffect(()=>{
  TweenMax.to(app,0,{css:{visibility:'visible'}});  
  // TweenMax.from(circle,0.8,{opacity:0,x:40,ease:Power3.easeOut,delay:0.4})
  // TweenMax.from(circleRed,0.8,{opacity:0,x:40,ease:Power3.easeOut,delay:0.8})
  // TweenMax.from(circleBlue,0.8,{opacity:0,x:40,ease:Power3.easeOut,delay:1.2})
  TweenMax.staggerFrom([circle,circleRed,circleBlue],.8,{opacity:0,x:40,ease:Power3.easeOut},.2)
})

  return (
    <div ref={el=>app=el} className="App">
      <header className="App-header" >
       <div className="circle_container"> 
         <div ref={el=>circle=el} className="circle"></div>
         <div onClick={state !== true ?expand:shrink} ref={el=>circleRed=el} className="circle red"></div>
         <div ref={el=>circleBlue=el} className="circle blue"></div>
       </div>
      </header>
    </div>
  );
}

export default Gsap3;
