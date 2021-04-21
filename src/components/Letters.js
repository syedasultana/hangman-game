import React from 'react';
import { useSelector } from "react-redux";


function Letters() {
    const incorrectLetters = useSelector(storeState => storeState.incorrectLetters);

    return (
        <div className="App">
            <h4>incorrect letters entered:</h4>
            <div>
                {
                    incorrectLetters.map(letter => <h4>{letter}</h4>)
                }
            </div>
        </div>
    );
}

export default Letters;