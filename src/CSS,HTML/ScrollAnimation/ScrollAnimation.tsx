import React from "react";
import "./style.css";

const ScrollAnimation = () => {
  const [windowHeight, setWindowHeight] = React.useState<number>(0);

  const [boxHeight, setBoxHeight] = React.useState<any>({ top: Number });

  const boxesSet = [
    { box: "box1", top: 0 },
    { box: "box2", top: 0 },
    { box: "box3", top: 0 },
    { box: "box4", top: 0 },
    { box: "box5", top: 0 },
    { box: "box6", top: 0 },
    { box: "box7", top: 0 },
    { box: "box8", top: 0 },
    { box: "box9", top: 0 },
    { box: "box10", top: 0 },
  ];

  console.log(windowHeight);
  const inputRef = React.useRef<any>();
  const scrollHandler = () => {
    setWindowHeight((window.innerHeight / 5) * 4);
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box: any, index) => {
      // console.log(box.offsetTop);
      boxesSet[index].top = box.offsetTop;
      console.log(boxesSet);
    });
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);

    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  // console.log(windowHeight);
  // console.log(boxesSet);
  return (
    <>
      <h1>Scroll to see animation</h1>
      {boxesSet.map((box: any , index:number) => (
        <div key={index} className={`box ${box.top < windowHeight && box.top > 0 ? 'show' : ''}`}>
          <h2>{box.box}</h2>
        </div>
      ))}
    </>
  );
};

export default ScrollAnimation;
