import './App.css';

function App(props) {
  // code here

  let headingStyle = {
    textAlign:"center"
  }

  let styleImg = {
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    alignSelf:"center"
  }

  let data = props.props

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
