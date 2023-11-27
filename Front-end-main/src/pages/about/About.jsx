import TopBar from "../../components/topbar/TopBar";
import "./about.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
export default function About() {
  return (
    
    <>
    <TopBar/>
    
    <div className="App">
      <div className="left-side">
        <div className="box">Our AI test is your guiding wind,<br/>steering you towards a path that<br/> resonates with your passions and<br/> strengths. 
</div>
        <div className="box">It is not just an algorithm; it's your <br/>compassionate companion on this <br/>voyage of uncovering purpose .
</div>
        <div className="box">It's more than a career—it's discovering <br/>a calling that ignites your heart<br/> daily.
</div>
      </div>
      <div className="right-side">
        <div className="laptop">
          <div className="screen">
            <button className="start-button">Start Test</button>
          </div>
        </div>
      </div>
    </div>
  
  

    </>
  );
}
