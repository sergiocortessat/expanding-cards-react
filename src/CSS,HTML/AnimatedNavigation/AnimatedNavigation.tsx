import React from "react";
import './style.css'
const AnimatedNavigation = () => {
    const [isActive, setIsActive] = React.useState(false);
  return (
    <nav className={isActive ? 'active' : ''} id="nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button type="button" className="icon" id="toggle" onClick={() => setIsActive(prev => !prev)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default AnimatedNavigation;
// <!-- Dribbble link: https://dribbble.com/shots/2427219-Header-Navigation-Day-053-dailyui -->
