import React from "react";
import './style.css';

const DragNDrop = () => {
  return (
    <div className="container">
      <div className="empty">
        <div className="fill" draggable={true}></div>
      </div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </div>
  );
};

export default DragNDrop;
