export const initialState = {
  randomWord: '',
  incorrectLetters: [],
  incorrectCounter: 0,
  gameWon: false,
  gameOver: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RANDOM_WORD":
          return {
            ...state,
            randomWord: action.payload 
          };
        case "ADD_INCORRECT_LETTER":
          return {
            ...state,
            incorrectLetters: [...state.incorrectLetters, action.payload]
          };
        case "INCREMENT_INCORRECT_COUNTER":
          return {
            ...state,
            incorrectCounter: state.incorrectCounter + 1
        }
        case "TOGGLE_GAME_WON":
          return {
            ...state,
            gameWon: action.payload
        }
        case "TOGGLE_GAME_OVER":
          return {
            ...state,
            gameOver: action.payload
        }
        default:
            return state;
    }
  };
  
export const setRandomWord = word => {
  return {
    type: "SET_RANDOM_WORD",
    payload: word
  };
};

export const addIncorrectLetter = letter => {
  return {
    type: "ADD_INCORRECT_LETTER",
    payload: letter
  };
};

export const incrementIncorrectCounter = () => {
  return {
    type: "INCREMENT_INCORRECT_COUNTER"
  };
};

export const toggleGameWon = bool => {
  return {
    type: "TOGGLE_GAME_WON",
    payload: bool
  };
};

export const toggleGameOver = bool => {
  return {
    type: "TOGGLE_GAME_OVER",
    payload: bool
  };
};



