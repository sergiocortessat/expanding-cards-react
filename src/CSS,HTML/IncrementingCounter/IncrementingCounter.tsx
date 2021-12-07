import React from "react";
import "./style.css";
// import CountUp from "react-countup";
import Counter from "./OwnCountUp";
const IncrementingCounter = () => {
  return (
    <div className="container">
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter" data-target="12000">
          <Counter end={12000} start={0} />
        </div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" data-target="5000">
        <Counter end={8000} start={0} />
        </div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" data-target="7500">
        <Counter end={5000} start={0} />
        </div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
};

export default IncrementingCounter;
