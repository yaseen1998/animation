import React, { Component} from 'react'
import "../App.css"
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite,Power2 } from 'gsap'
export class Gsap4 extends Component {
  constructor(props){
    super(props)
    this.container = React.createRef()
    this.image = React.createRef()
    this.imageRev = CSSRulePlugin.getRule('.img_container:after')
    this.tl = new TimelineLite()
  }
  componentDidMount() {
    this.tl.to(this.container,1,{css:{visibility:'visible'}})
    .to(this.imageRev,1.4,{width:"0%",ease:Power2.easeInOut})
    .from(this.image,1.4,{scale:1.6,ease:Power2.easeInOut,delay:-1.6})
  }
 

  render() {
    return (
      
    <section className="main">
      <div className="container" ref ={el=>this.container=el}> 
        <>
        <div className="img_container">
          <img ref ={el=>this.image=el}
          src="https://cdn.mos.cms.futurecdn.net/Bf76HbZrvfDQ96txtCR8oJ.jpg" alt="" />
        </div>
        </>
      </div>
    </section>
    )
  }
}

export default Gsap4
