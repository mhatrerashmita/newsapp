
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newcontent from './components/Newcontent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";


export default class App extends Component {
  pageSize=15;
  state = {
    progress:100
  }
  setProgress = (progress)=>{
    this.setState ({progress:progress})
  }
  render(){
  return (
    <div>
      <>
    <Router>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
      <Routes>
            <Route exact path="/"  element={<Newcontent setProgress = {this.setProgress}   key={"general"}  pageSize={this.pageSize} country="in" category="general" />}> </Route>
            <Route exact path="/general"  element={<Newcontent setProgress={this.setProgress}   key={"general"}  pageSize={this.pageSize} country="in" category="general" />}> </Route>
            <Route exact path="/business" element={<Newcontent setProgress={this.setProgress}   key={"business"}  pageSize={this.pageSize} country="in" category="business" />}> </Route>
            <Route exact path="/entertainment" element={<Newcontent setProgress={this.setProgress}  key={"entertainment"} pageSize={this.pageSize} country="in" category="entertainment" />}> </Route>
            <Route exact path="/health" element={<Newcontent setProgress={this.setProgress}  key={"health"} pageSize={this.pageSize} country="in" category="health" />}> </Route>
            <Route exact path="/science"element={<Newcontent setProgress={this.setProgress}  key={"science"} pageSize={this.pageSize} country="in" category="science" />}> </Route>
            <Route exact path="/sports" element={<Newcontent setProgress={this.setProgress}  key={"sports"} pageSize={this.pageSize} country="in" category="sports" />}> </Route>
            <Route exact path="/technology" element={<Newcontent setProgress={this.setProgress}  key={"technology"} pageSize={this.pageSize} country="in" category="technology" />}> </Route>
            </Routes>
            
</Router>
    </>
    </div>
  )
}
}


