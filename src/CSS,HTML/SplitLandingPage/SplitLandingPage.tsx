import React from 'react';
import './style.css'

const SplitLandingPage = () => {
    const [left, setLeft] = React.useState(false);
    const [right, setRight] = React.useState(false);
    return (
        <div className={`container ${left ? 'hover-left' : ''} ${right ? 'hover-right' : ''}`}>
            <div className="split left" 
            onMouseEnter={() => setLeft(true)}
            onMouseLeave={() => setLeft(false)}
            >
                <h1>Playstation 5</h1>
                <a href="https://www.playstation.com/en-us/ps5/games/" target="_blank" rel="noreferrer" className="btn">Buy Now</a>
            </div>
            <div className="split right"
              onMouseEnter={() => setRight(true)}
              onMouseLeave={() => setRight(false)}
            >
                <h1>Xbox One</h1>
                <a href="https://www.xbox.com/en-us/games/" className="btn" target="_blank" rel="noreferrer">Buy Now</a>
            </div>
        </div>
    )
}

export default SplitLandingPage;