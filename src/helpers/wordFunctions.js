import { type } from "os";

export const isValidInput = (input, alreadyInputtedCorrect, alreadyInputtedIncorrect, setErrorMsg) => {
    const potentialNum = parseInt(input);
    // if (typeof potentialNum !== 'string') {
    //     setErrorMsg('Please enter a letter🆎');
    //     return false;
    /*} else */ if (input.length > 1) {
        setErrorMsg('Please enter a single letter🧐');
        return false;
    } else if (alreadyInputtedCorrect.includes(input)) {
        setErrorMsg('You have already entered this letter😅');
        return false;
    } else if (alreadyInputtedIncorrect.includes(input)) {
        setErrorMsg('You have already entered this letter😅');
        return false;
    } else {
        return true;
    }
}

export const isLetterCorrect = (word, letter) => {
    if (word.includes(letter)) {
        return true;
    } else {
        return false;
    }
}

export const showCorrectLetter = (word, letter, showingWord)  => {
    let indexes = getAllIndexes(word.split(""), letter);
    indexes.map(index => {
        showingWord[index] = letter
    })
    //console.log(showingWord, 'inputLetters now');
    return showingWord;
}

export const getAllIndexes = (arr, val) => {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
