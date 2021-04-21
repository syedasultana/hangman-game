import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import {
    isValidInput,
    isLetterCorrect,
    showCorrectLetter
} from '..//helpers/wordFunctions';

function Word({ topic, setTopic }) {
    const dispatch = useDispatch();
    const randomWord = useSelector(storeState => storeState.randomWord);
    const gameOver = useSelector(storeState => storeState.gameOver); //use ternary to display randomWord when true
    const incorrectLetters = useSelector(storeState => storeState.incorrectLetters);
    const [inputLetters, setInputLetters] = React.useState(''); //displays the randomWord as _
    const [enteredLetter, setEnteredLetter] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');
   
    React.useEffect(() => {
        if (randomWord === '') {
            axios
                .get(
                    `https://api.datamuse.com/words`, {
                        params: {
                            ml: topic
                        }
                    }
                )
                .then(response => {
                    console.log(response.data)
                    let filteredData = response.data.filter(datum => !datum.word.includes(topic)); //console.log(response.data)
                    let min = 0;
                    let max = filteredData.length - 1;
                    let randomNumber = Math.round(Math.random() * (max - min) + min);
                    let chosenRandomWord = filteredData[randomNumber].word;
                    console.log('random word: ', chosenRandomWord);
                    dispatch({ type: "SET_RANDOM_WORD", payload: chosenRandomWord });
                    let wordArrayed = [];
                    chosenRandomWord.split("").forEach(letter => {
                        wordArrayed.push('_ ');
                    }); 
                    setInputLetters(wordArrayed);
                });
        } 
    }, [randomWord])


    if (gameOver) {
        return (
            <div class="text-center">
                <h3>GAME OVER</h3>
                <h2>'{randomWord}'</h2>
                <Button
                    variant="success"
                    onClick={() => {
                        setTopic('');
                    }}
                >Restart game</Button>
            </div>
        )
    } else {
        return (
            <div className="App">
                <h2>{inputLetters}</h2>
                <h4>Topic: {topic}</h4>
                <br />
                <label>Enter letter: </label>
                <input 
                    type="text" 
                    placeholder="e.g a"
                    onChange={(event) => {
                        setEnteredLetter(event.target.value);
                        setErrorMsg('');
                    }}
                    value={enteredLetter}
                    required
                />
                <Button
                    variant="outline-success"
                    onClick={() => {
                        if (isValidInput(enteredLetter, inputLetters, incorrectLetters, setErrorMsg)) {
                            if (isLetterCorrect(randomWord, enteredLetter)) {
                                setInputLetters(showCorrectLetter(randomWord, enteredLetter, inputLetters));
                            } else {
                                dispatch({ type: "ADD_INCORRECT_LETTER", payload: enteredLetter });
                                dispatch({ type: "INCREMENT_INCORRECT_COUNTER" });
                            }
                            if (inputLetters || inputLetters !== "") {
                                console.log('inputLetters', inputLetters);
                                if (inputLetters.join("") === randomWord) {
                                    dispatch({ type: "TOGGLE_GAME_WON", payload: true}); //console.log('youve won!');
                                }
                            } 
                        } else {
                            console.log(errorMsg, 'errorMSG')
                        }
                        setEnteredLetter('');
                    }}
                >submit</Button>
                <div>
                    {
                        (errorMsg !== '')
                        ? <h4>{errorMsg}</h4>
                        : null
                    }
                </div>
            </div>
        );
    }               
    
}

export default Word;