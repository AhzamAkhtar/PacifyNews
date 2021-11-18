import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Navbar from './Navbar';
import News from './News';
import Apinews from './Apinews';
import Footer from './Footer';
export default class App extends Component{
  c="john"
  render(){
    return(
      <><Navbar />
      <News/>
      {/*<Apinews pagesize={4} country="in" category="general"/>*/}
      <Footer/>
      </>
    )
  }
}