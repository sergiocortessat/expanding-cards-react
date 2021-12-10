import React from "react";
import './style.css'

const ContentPlaceholder = () => {
  return (
    <div className="card">
      <div className="card-header animated-bg" id="header">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" id="title">
          Lorem ipsum dolor sit amet, consectetur adip
        </h3>
        <p className="card-excerpt" id="excerpt">
          Lorem ipsum dolor sit amet, consectetur adip
          {/* <span className="animated-bg animated-bg-text">&nbsp</span>
          <span className="animated-bg animated-bg-text">&nbsp</span>
          <span className="animated-bg animated-bg-text">&nbsp</span> */}
        </p>
        <div className="author">
          <div className="profile-img animated-bg" id="profile_img">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
          </div>
          <div className="author-info">
              <strong className="animated-bg animated-bg-text" id="name">
                  Jhon DadJokes
              </strong>
              <small className="animated-bg animated-bg-text" id="date">
                  Oct 08,2020
              </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPlaceholder;
