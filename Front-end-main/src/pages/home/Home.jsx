import TopBar from "../../components/topbar/TopBar";
import "./home.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
export default function Home() {
  return (
    
    <>
    <TopBar/>
    <div className="home">
    
    
      <div className="head">
      <div className="writing1" style={{textAlign: 'center'}}>Welcome to Career Compass,<br/>
      Your Pathway to Purpose!</div>
      
      </div>
      <div className="question">
        
      <div className="writing2" style={{textAlign: 'center'}}>
      Are you standing at the crossroads of life, unsure A<br/>which path to take?
      </div>
      </div>
      
      <div className="answer">
      <div className="writing3" style={{textAlign: 'center'}}>
      Classroom to career is a tumultuous journey. At Career Compass, we get the uncertainty and 
      <br />
      self-doubt. We're that guiding lighthouse in your storm, lighting your way to a brighter 
      <br />
      tomorrow.
<br />
<br /> 
In a world full of opportunities, finding your calling is like finding a needle in a haystack.
<br /> 
Pressure to conform can dim your dreams.At Career Compass, we believe every student 
<br />
should discover their unique purpose. 
      </div>
      
        <div className="writing4">Click on the Test button to determine which career suits you the most <button className="test1">
        <Link className="link" to="/about">
        Test
            </Link></button></div>
        
      
      </div>
    </div>
    
    
    </>
  );
}
