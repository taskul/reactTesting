import { useState } from "react";
import './NumberGame.css';

const NumberGame = (props) => {
    const genRand = () => Math.floor(Math.random() * 10) + 1;
    const restart = () => {
        setTarget(genRand());
        setGuess(0)
        setGuessCount(0)
    }
    const makeGuess = () => {
        setGuess(genRand())
        setGuessCount(guessCount + 1)
    }
    const [guess, setGuess] = useState(genRand());
    // this will generate new number every time we change the state because the whole
    // component will re-render, which will run getRand() again, useState keeps track of 
    // it's state variable which is a "guess", but not of other variables
    // const target = genRand();

    // so work around is to use useState for target all
    // this way the value of target will persist as the component re-renders everytime we
    // press button and change the state of our guess
    const [target, setTarget] = useState(genRand());

    // we can also get variable that will check for winner
    // and then <h1 className={resultClass}>Your guess: {guess}</h1>
    // const resultClass = target === guess ? 'winner' : 'loser'
    const isWinner = target === guess;

    const [guessCount, setGuessCount] = useState(0)

    return (
        <div>
            <h1>Target Numger: {target}</h1>
            {/* using inline style to change the color of the guess dynamically */}
            {/* <h1 style={{ color: target === guess ? 'green' : 'red' }}>You Guess: {guess}</h1> */}
            {/* We can also set class name dynamically */}
            {/* <h1 className={target === guess ? 'winner' : 'loser'}>Your guess: {guess}</h1> */}
            {/* We can also assign result to a variable which allows us to apply that variable to other parts of our component
             */}
            <h1 className={isWinner ? 'winner' : 'loser'}>Your guess: {guess}</h1>
            {/* Then we can use ternary operator to control the rendering of our button */}
            {/* {
                isWinner ?
                    null : <button onClick={() => setGuess(genRand())}>Generate Number</button>
            } */}
            {
                isWinner ?
                    null : <button onClick={() => makeGuess()}>Generate Number</button>
            }
            <button onClick={() => restart()}>New Game</button>
            <p>Number of guesses it took: {guessCount}</p>
            {/* Another way is to use a conditional statement 
            */}
            {/* {!isWinner && <button onClick={() => setGuess(genRand())}>Generate Number</button>} */}

        </div>
    )
}

export default NumberGame;