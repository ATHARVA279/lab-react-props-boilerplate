import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

let data = imageData()

function App() {
  // code here

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
      <img src={data[0].img} alt="" width={"550px"} style={{margin:"auto", marginBottom:"50px"}}/>
      <img src={data[1].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
      <img src={data[2].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
      <img src={data[3].img} alt="" width={"550px"} style={{margin:"auto",marginBottom:"50px"}}/>
    </div>
    </>
  )
}

export default App;
