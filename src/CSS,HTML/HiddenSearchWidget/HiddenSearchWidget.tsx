import React from 'react';
import './style.css'

const HiddenSearchWidget = () => {
    const [active, setActive] = React.useState(false);
    return (
        <div className={`search ${active ? 'active' : ''}`}>
            <input type="text" placeholder="Search..." className="input" />
            <button className="btn" onClick={() => setActive((prev) => !prev)}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default HiddenSearchWidget;