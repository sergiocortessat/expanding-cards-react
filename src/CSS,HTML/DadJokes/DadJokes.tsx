import React from 'react';
import './style.css'
import dadJoke from '../DadJokes/API'
const DadJokes = () => {
    const [joke, setJoke] = React.useState('')

    React.useEffect(() => {
        dadJoke().then(data => {
            setJoke(data.joke)
        })
    }, [])

    const handleNewJoke = () => {
        dadJoke().then(data => {
            setJoke(data.joke)
        })
    }

    return (
        <div className="container">
            <h3>Dont Laugh Challenge</h3>
            <div id="joke" className="joke">
                {joke}
            </div>
            <button type="button" id="jokeBtn" className="btn" onClick={() => handleNewJoke()}>
                Get Another Joke
            </button>
        </div>
    )
}

export default DadJokes;