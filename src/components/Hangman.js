import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    firstMark,
    secondMark,
    thirdMark,
    fourthMark,
    fifthMark,
    sixthMark,
    seventhMark,
    eighthMark,
    ninthMark
} from '..//helpers/canvasFunctions';

function Hangman() {
    const dispatch = useDispatch();
    const incorrectCounter = useSelector(storeState => storeState.incorrectCounter);

    window.addEventListener("load", () => {
        const canvas = document.querySelector('#canvas'); 
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#003300';
    })
     
    React.useEffect(() => {
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');
        switch(incorrectCounter) {
            case 1:
                firstMark(ctx);
                break;
            case 2:
                secondMark(ctx);
                break;
            case 3:
                thirdMark(ctx);
                break;
            case 4:
                fourthMark(ctx); 
                break;
            case 5:
                fifthMark(ctx); 
                break;  
            case 6:
                sixthMark(ctx); 
                break; 
            case 7:
                seventhMark(ctx); 
                break;
            case 8:
                eighthMark(ctx);
                break; 
            case 9:
                ninthMark(ctx); 
                console.log('game over');
                dispatch({ type: "TOGGLE_GAME_OVER", payload: true});
                break;
            default:
                console.log('nothing');
        }
    }, [incorrectCounter])

    
    return (
        <div className="App">
            <canvas id="canvas" ></canvas>
        </div>
    );
}


export default Hangman;