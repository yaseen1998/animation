import React, { Component} from 'react'
import "./App.scss"
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite,Power2 } from 'gsap'
import arrow from "./images/arrow-right.svg"
export class App extends Component {
  constructor(props){
    super(props)
   
   
  }
  

  render() {
    return (
      
   <div className="hero">
    <div className="hero_container">
      <div className="hero_inner">
        <div className="hero_content">
        <div className="hero_content_inner">
          <h1>
        <div className="hero_content_line">
        <div className="hero_content_line_inner">
          Relaving the burder 
          </div>
          </div>
        <div className="hero_content_line">
        <div className="hero_content_line_inner">
          of disease caused
          </div>
          </div>
        <div className="hero_content_line">
        <div className="hero_content_line_inner">
         by beahviore
          </div>
          </div>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit perferendis, voluptatem ex officia debitis labore similique, amet itaque doloribus maiores nulla molestias est non nisi aspernatur vero esse placeat animi?</p>
          <div className="btn_row">
            <button className="explore_button">
              explorer
              <div className="arrow_icon">
                <img src={arrow} alt="" />
              </div>
            </button>
          </div>
          </div>
        </div>
        <div className="hero_image">
        <div className="hero_image_inner">
          <div className="hero_image girl">
            <img src="https://raw.githubusercontent.com/wrongakram/GSAP-Hero-Animation/master/src/images/girl.webp" alt="" />
          </div>
          <div className="hero_image boy">
            <img src="https://raw.githubusercontent.com/wrongakram/GSAP-Hero-Animation/master/src/images/boy.webp" alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
    )
  }
}

export default App
