import React, { useState } from 'react';
import '../Navbar.css';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler nav__toggler-active' : 'nav__toggler');
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">ERICK</a>
      <ul className={active}>
        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Skill</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Portfolio</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
