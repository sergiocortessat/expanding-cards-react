import React from 'react'
import './style.css'

type Scale = {
    num: number
    in_min: number
    in_max: number
    out_min: number
    out_max: number
}

const BlurryLoading = () => {
    const [percent, setPercent] = React.useState(0)
    const [opacity, setOpacity] = React.useState(1)
    const [blur, setBlur] = React.useState(30)
    const scale = ({num, in_min, in_max, out_min, out_max}:Scale) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
    React.useEffect(() => {
        if (percent < 100) {
            const timer = setInterval(() => {
                setPercent(percent => percent + 1)
                setOpacity(opacity => scale({num: percent, in_min:0, in_max:100,out_min:1,out_max:0}))
                // setOpacity(opacity => opacity - 0.01)
                setBlur(blur => scale({num: percent, in_min:0, in_max:100,out_min:30,out_max:1}))
            }, 15)
            return () => clearInterval(timer)
        }
    }, [percent])
    return (
        <>
        <section className="bg" style={{filter: `blur(${blur}px)`}}></section>
        <div className="loading-text" style={{opacity: opacity}}>{percent}%</div>
        </>
    )
}

export default BlurryLoading
