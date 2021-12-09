import React, { CSSProperties, MouseEvent, useState } from "react";
import "./style.css";

const ButtonRippleEffect = () => {
  // const [coordinates, setCoordinates] = React.useState<CSSProperties>({
  //   top: "0",
  //   left: "0",
  // });

  const handleButtonCoordinates = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const x = event.clientX;
    const y = event.clientY;
    const buttonTop = target.offsetTop;
    const buttonLeft = target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    target.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  };

  return (
    <button className="btn ripple" onClick={(e) => handleButtonCoordinates(e)}>
      Click Me
    </button>
  );
};

export default ButtonRippleEffect;
