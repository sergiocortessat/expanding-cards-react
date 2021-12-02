import React, { ChangeEvent, ReactEventHandler } from "react";
import "./style.css";

const FormWaveAnimation = () => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  const labelSpan = (word: string) =>
    word.split("").map((letter, index) => {
      return (
        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
          {letter}
        </span>
      );
    });

  console.log(labelSpan("Hello"));
  return (
    <div className="container">
      <h1>Please Login</h1>
      <form onSubmit={(e:ChangeEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className="form-control">
          <input type="text" required />
          {/* <label>Email</label> */}
          <label>
            {/* <span style={{transitionDelay: '0ms'}}>E</span>
              <span style={{transitionDelay: '50ms'}}>m</span>
              <span style={{transitionDelay: '100ms'}}>a</span>
              <span style={{transitionDelay: '150ms'}}>i</span>
              <span style={{transitionDelay: '200ms'}}>l</span> */}

            {labelSpan("Email")}
          </label>
        </div>

        <div className="form-control">
          <input type="password" required />
          {/* <label>Password</label> */}
          <label>{labelSpan("Password")}</label>
        </div>

        <button type="submit" className="btn">
          Login
        </button>
        <p className="text">
          Dont have an account?
          <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default FormWaveAnimation;
