import React, { CSSProperties } from "react";
import './style.css'

function App() {
  const css: { name: string; backgroundImage: string }[] = [
    {
      name: "Explore The World",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    },
    {
      name: "Wild Forest",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    },
    {
      name: "Sunny Beach",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)",
    },
    {
      name: "City of Winter",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)",
    },
    {
      name: "Mountains - Clouds",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    },
  ];
  const [active, setActive] = React.useState(1);

  return (
    <div className="container">
      {css.map((style, index) => (
        <div
          key={index}
          className={`panel ${active === index ? "active" : ""}`}
          style={{backgroundImage: style.backgroundImage}}
          onClick={() => setActive(index)}
        >
          <h3>{style.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;

{
  /* <div className="container">
      <div
        className={`panel ${active === 1 ? "active" : ""}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
        onClick={() => {
          setActive(1);
        }}
      >
        <h3>Explore The World</h3>
      </div>

      <div
        className={`panel ${active === 2 ? "active" : ""}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
        onClick={() => {
          setActive(2);
        }}
      >
        <h3>Wild Forest</h3>
      </div>

      <div
        className={`panel ${active === 3 ? "active" : ""}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)",
        }}
        onClick={() => {
          setActive(3);
        }}
      >
        <h3>Sunny Beach</h3>
      </div>

      <div
        className={`panel ${active === 4 ? "active" : ""}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)",
        }}
        onClick={() => {
          setActive(4);
        }}
      >
        <h3>City on Winter</h3>
      </div>

      <div
        className={`panel ${active === 5 ? "active" : ""}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
        onClick={() => {
          setActive(5);
        }}
      >
        <h3>Mountains - Clouds</h3>
      </div>
    </div> */
}
