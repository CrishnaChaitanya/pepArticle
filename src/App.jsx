import React, { useState } from "react"
import Ptext from "./components/Ptext"
// import Me from "./components/img1"
import SectionTitle from "./components/SectionTitle"
import MyCoolCodeBlock from "./components/Code"
import YouTube from "react-youtube"
import Head from "./components/Head"
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import Explain from "./components/Explain"
var getYoutubeId = require("get-youtube-id")

const Full = styled.div
`
.App{
  
  margin-left:22%;
}
.pic{
  margin-left:27%;
}
.three{
  display:flex;
  justify-content:center;
  align-items:center;
}

` 
export default function App() {

  const [id, setId] = useState("CjX25pq6-SY");

  function handleChange(e) {
    console.log(e.target.value);

    setId(getYoutubeId(e.target.value));
  }
  const opts = {
    height: "390",
    width: "740",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <Full>
    <SectionTitle heading="Array subarray" subheading="#arrays"/>
    <Ptext>
      <p style={{marginBottom:"30px",fontWeight:"bold",fontSize:"x-large", color:"#016508" }}>Given an array arr of integer elements, the task is to find the range and coefficient of range of the given array where: 
Range: Difference between the maximum value and the minimum value in the distribution. 
Coefficient of Range: (Max – Min) / (Max + Min).</p>
    </Ptext>
    <Head heading="Explanation"/>
    <Explain/>
    <div className="three">
    <img src="https://www.techiedelight.com/wp-content/uploads/Build-Binary-Tree-from-Parent-Array.png" />
    <img src="https://www.techiedelight.com/wp-content/uploads/Build-Binary-Tree-from-Parent-Array.png" />
    <img src="https://www.techiedelight.com/wp-content/uploads/Build-Binary-Tree-from-Parent-Array.png" />
    </div>
    <Head heading="Sample code"/>
    <MyCoolCodeBlock/>
    <Head heading="Watch this for better understanding"/>

    <div className="App">
      
      <YouTube videoId={id} opts={opts} />
    </div>
    <Head heading="Code Image"/>
    <div className="pic">
    <img src="https://pbs.twimg.com/media/C9VKyrhU0AAjaBh.jpg" margin-left="50px" width="600px" height="600px"/>
    </div>
    <Head heading="Final Code"/>

    <MyCoolCodeBlock/>
    <h1>Contributed By: PepTeam</h1>
    <Sidebar/>
    </Full>
  );
}


