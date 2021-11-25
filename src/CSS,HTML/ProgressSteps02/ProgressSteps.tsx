import React from 'react';
import './style.css'

const ProgressSteps = () => {
    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className="circle active">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
            </div>
            <button type="button" className="btn" id="prev" disabled>Prev</button>
            <button type="button" className="btn" id="next">Next</button>
        </div>
    )
}

export default ProgressSteps;