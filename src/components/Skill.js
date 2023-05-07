import React from 'react';
import htmlLogo from '../images/HTML5.jpeg';
import cssLogo from '../images/CSS_3.png';
import jsLogo from '../images/JS.png';
import pythonLogo from '../images/Python.png';

function Skill() {
  return (
    <div className="inner"> 
      <div className="header">
        <h1>Skill</h1>
      </div>
      
      <div className="container">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={htmlLogo} alt="HTML5 logo"/>
            </div> 
            <h3>HTML5</h3>
          </div>
          <p>HyperText Markup Language version 5</p>
        </div> 
        
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={cssLogo} alt="CSS3 logo"/>
            </div> 
            <h3>CSS</h3>
          </div>
          <p>Cascading Style Sheets</p>
        </div> 
        
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={jsLogo} alt="JavaScript logo"/>
            </div> 
            <h3>Javascript</h3>
          </div>
          <p>A programming language used to create interactive web content</p>
        </div> 
        
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={pythonLogo} alt="Python logo"/>
            </div> 
            <h3>Python</h3>
          </div>
          <p>A high-level programming language used for a variety of applications</p>
        </div> 
      </div>
    </div>
  )
}

export default Skill;
