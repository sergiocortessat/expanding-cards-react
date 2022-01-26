import React, { ReactNode } from "react";
import "./style.css";

// create ToastNotification component
const ToastNotification = () => {

  const [show, setShow] = React.useState(false);

  const messages = [
    {message: "You are logged in", type: "success", color: "green"},
    {message: "Wrong credentials", type: "error", color: "red"},
    {message: "You are logged out", type: "information", color: "blue"},
  ];

    const handleClick = () => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
      //clear time out
      clearTimeout();
    };

  
  return (
    <>
    {show &&
      <div id="toasts">
        <div className="toast" style={{'color': `${messages[0].color}`}}>{messages[0].message}</div>
      </div>
}

      <button id="button" className="btn" onClick={() => handleClick()}>
        Show Notification
      </button>
    </>
  );
};

export default ToastNotification
