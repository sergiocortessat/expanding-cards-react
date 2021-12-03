import React from "react";
import "./style.css";

const EventKeyCodes = () => {
  const [keyCode, setKeyCode] = React.useState("");
  const [key, setKey] = React.useState("");
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
    //   setKeyCode(e.keyCode);
      setKey(e.key);
      setCode(e.code);
    });
  }, []);

  return (
    <div id="insert">
      {key ? (
        <>
          <div className="key">
            ${key === " " ? "Space" : key}
            <small>event.key</small>
          </div>
          <div className="key">
            ${keyCode}
            <small>event.keyCode</small>
          </div>
          <div className="key">
            ${code}
            <small>event.code</small>
          </div>
        </>
      ) : (
        <div className="key">Press any key to get the keyCode</div>
      )}
    </div>
  );
};

export default EventKeyCodes;
