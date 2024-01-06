import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
    render(){
    this.data = this.props.props

    let headingStyle = {
      textAlign:"center"
    }
  
    let styleImg = {
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      alignSelf:"center"
    }

    return(
      <>
      <h1 style={headingStyle}>Kalvium Gallery</h1>
      <div style={styleImg}>
      <img src={this.data[0].img} alt="" width={"550px"} style={{margin:"auto", marginBottom:"50px"}}/>
      <img src={this.data[1].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
      <img src={this.data[2].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
      <img src={this.data[3].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
    </div>
      </>
    )
  }

  // code here
}
