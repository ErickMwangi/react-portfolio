import React from 'react';
import Entergalactic from '../images/Entergalactic.jpeg';

function About() {
  return (
    <div About-div>
      <div className="About-head">
        <h1>Erick Portfolio</h1>
      </div>
      <p className="About-par"> 
        <h2>Hello, I'm Erick Mwangi</h2>
        <h3> Both Android & Web Developer <br /> 
        from Nairobi,Kenya; 
        <h5>
          I write code, design mock-ups and make apps. Im passionate about coding and i love creating things that live on the web. 
          <br />when not fingers-down coding , I love listening to music reading comic novels and spending time with family watching football.
          <br />I am hard-working, super curious, passionate, committed, and also on time!
        </h5>
        </h3>
        <img src={Entergalactic} alt="My Image" />
      </p>
    </div>
  );
}

export default About;
