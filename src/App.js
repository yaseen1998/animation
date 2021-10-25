import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Gsap3 from './components/Gsap3'
import Gsap4 from './components/Gsap4'
// import Gsap5 from './components/Gsap5'
// import Gsap1 from './components/Gsap1'
import Gsap6 from './components/Gsap6/Gsap6'
import Gsap7 from './components/Gsap7/Gsap7'
import Gsap8 from './components/Gsap8/Gsap8'
import Gsap9 from './components/Gsap9/Gsap9'
import Gsap10 from './components/Gsap10/Gsap10' 
import Gsap11 from './components/Gsap11/Gsap11' 
import Gsap12 from './components/Gsap12/Gsap12' 
import Gsap13 from './components/Gsap13/Gsap13' 
export class App extends Component {
  render() {
    return (
      <Router>
  <div>
        <Switch>
          <Route exact path="/">
          <Gsap9/>
          </Route>
          <Route path="/Gsap8">
            <Gsap8 />
          </Route>
          <Route path="/Gsap7">
            <Gsap7/>
          </Route>
          <Route path="/Gsap6">
            <Gsap6/>
          </Route>
          <Route path="/Gsap10">
            <Gsap10/>
          </Route>
          <Route path="/Gsap11">
            <Gsap11/>
          </Route>
          <Route path="/Gsap12">
            <Gsap12/>
          </Route>
          <Route path="/Gsap13">
            <Gsap13/>
          </Route>
          <Route path="/Gsap4">
            <Gsap4/>
          </Route>
        </Switch>
      </div>
    </Router>
      
    )
  }
}

export default App
