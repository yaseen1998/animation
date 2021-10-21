import React, { Component } from "react";
import "../App.scss";
import { TweenMax, Power3, TimelineLite } from "gsap";
import arrow from "../images/arrow-right.svg";

export class Gsap5 extends Component {
 
  constructor(props) {
    super(props);
    this.app = React.createRef();
    this.image = React.createRef();
    this.content = React.createRef();
    this.tl = new TimelineLite({delay:0.8});
  }
  componentDidMount= (()=> {
    const girlImage = this.image.firstElementChild;
    const boyImage = this.image.lastElementChild;
    const headLineFirst = this.content.children[0].children[0]
    const headLineSecond = headLineFirst.nextSibling
    const headLineThird= headLineSecond.nextSibling
    const contentP = this.content.children[1]
    const contentButton = this.content.children[2]

    TweenMax.to(this.app, 0, { css: { visibility: "visible" } });
    this.tl
      .from(girlImage, 1.2, { y: 1200, ease: Power3.easeOut },"Start")
      .from(girlImage.firstElementChild,2,{scale:1.6,ease: Power3.easeOut},.4)
      .from(boyImage, 1.2, { y: 1200, ease: Power3.easeOut },.2)
      .from(boyImage.firstElementChild,2,{scale:1.6,ease: Power3.easeOut},.4);

      this.tl.staggerFrom([headLineFirst.children,headLineSecond.children,headLineThird.children]
        ,1,{
          y:44,
          delay:0.8,
          ease: Power3.easeOut
        },.15,"Start") // Cool kids
        .from(contentP,1,{
          y:20,opacity:0,ease: Power3.easeOut
        },1.4)
        .from(contentButton,1,{
          y:20,opacity:0,ease: Power3.easeOut
        },1.6)
    })

  render() {
    return (
      <div className="hero" ref={(el) => (this.app = el)}>
        <div className="hero_container">
          <div className="hero_inner">
            <div className="hero_content">
              <div className="hero_content_inner" ref={(el) => (this.content = el)}>
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
                    <div className="hero_content_line_inner">by beahviore</div>
                  </div>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit perferendis, voluptatem ex officia debitis labore
                  similique, amet itaque doloribus maiores nulla molestias est
                  non nisi aspernatur vero esse placeat animi?
                </p>
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
              <div className="hero_image_inner" ref={(el) => (this.image = el)}>
                <div className="hero_image girl">
                  <img
                    src="https://raw.githubusercontent.com/wrongakram/GSAP-Hero-Animation/master/src/images/girl.webp"
                    alt=""
                  />
                </div>
                <div className="hero_image boy">
                  <img
                    src="https://raw.githubusercontent.com/wrongakram/GSAP-Hero-Animation/master/src/images/boy.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gsap5;
