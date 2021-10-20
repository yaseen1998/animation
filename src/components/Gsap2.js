import logo from '../logo.svg';
import '../App.css';
import {React,useRef,useEffect,useState} from 'react';
import { TweenMax,Power3,gsap } from 'gsap';


function Gsap2() {
  let logoitem= useRef(null)
  let textitem=useRef(null)
  useEffect(()=>{
    TweenMax.to(logoitem,.8, {opacity: 1, y:-20,ease:Power3.easeOut})
    gsap.to(textitem,.8, {opacity: 1, delay:2, y:-20,ease:Power3.easeOut}) 
  },[])

  return (
    <div className="App">
      <header className="App-header" >
        <img
        ref={el=>{logoitem=el}} 
        src={logo} className="App-logo" alt="logo" />
        <p ref={el=>{textitem=el}}  >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Gsap2;
