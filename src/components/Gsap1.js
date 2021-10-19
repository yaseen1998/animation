import {React,useRef,useEffect,useState, Component} from 'react';
import { gsap } from 'gsap';


export class Gsap1 extends Component {
    render() {
        const [backgroud,setBackground] = useState("#5a7d95")
        console.log(setBackground);
        const hederRef = useRef(null)
        const toggle=()=>{
          const color = backgroud !== "#5a7d95" ? "#5a7d95" : "#1b4943";
          setBackground(color)
          console.log(setBackground(color));
        }
        useEffect(()=>{
          gsap.from(hederRef.current,{
            duration:1,
            autoAlpha:0,
            ease:'none',
            delay:1
          })
      
      },)
      useEffect(()=>{
        gsap.to(hederRef.current,{
          duration:1,
          backgroundColor:backgroud,
          ease:'none',
        })
      
      },[backgroud])
        return (
            <div>
                
            </div>
        )
    }
}

export default Gsap1
