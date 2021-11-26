import React from 'react';
import './style.css'

const ProgressSteps = () => {
    const circle = [1,2,3,4];
    const [step, setStep] = React.useState(1);

    const disabledPrev = () => {
        if(step === circle[0]){
            return true;
        } else {
            return false;
        }
    }

    const disabledNext = () => {
        if(step === circle[circle.length - 1]){
            return true;
        } else {
            return false;
        }
    }

    const active = (circleItem:number) => {
       return circleItem <= step ? 'active' : '';
    }

    const customWidth = (step - 1) / (circle.length - 1) * 100 + '%'
    const handleNext = () => {
        setStep((prev) => prev + 1);
    }

    const handlePrev = () => {
        setStep((prev) => prev - 1);
    }
    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" id="progress" style={{width: customWidth}}></div>
               {circle.map((item) => (
                    <div className={`circle ${active(item)}`} key={item}>{item}</div>
               ))}
            </div>
            <button type="button" className="btn" id="prev" disabled={disabledPrev()} onClick={handlePrev}>Prev</button>
            <button type="button" className="btn" id="next" disabled={disabledNext()} onClick={handleNext}>Next</button>
        </div>
    )
}

export default ProgressSteps;