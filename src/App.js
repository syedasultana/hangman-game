import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Word from './components/Word';
import Hangman from './components/Hangman';
import Letters from './components/Letters';
import TopicButton from './components/TopicButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  const dispatch = useDispatch();
  const gameWon = useSelector(storeState => storeState.gameWon);
  const [chosenTopic, setChosenTopic] = React.useState('');

  return (
    <div class="container text-center">
      <b><h1>Hangman</h1></b>

      <div>
        {
          (chosenTopic !== '') 
          ?  
            <>
              <Word topic={chosenTopic} setTopic={setChosenTopic} />
              <br />
              <div>
                {
                  (gameWon)
                  ? 
                    <div>
                      <h2 class="text-center">🔥🏆You've won!🏆🔥</h2>
                      <Button
                        variant="success"
                        onClick={() => {
                          setChosenTopic('');
                          dispatch({ type: "TOGGLE_GAME_WON", payload: false });
                        }}
                      >Restart game</Button>
                    </div>
                  : 
                    <div>
                      <Hangman />
                      <Letters />
                    </div>
                }
              </div> 
            </>
          : 
            <>
              <h3>choose a topic!</h3>
              <TopicButton topicName={'food'} setChosenTopic={setChosenTopic} variantName={'info'}/>
              <TopicButton topicName={'animals'} setChosenTopic={setChosenTopic} variantName={'danger'}/>
              <TopicButton topicName={'travel'} setChosenTopic={setChosenTopic} variantName={'warning'}/>
            </> 
        }
      </div>


    </div>
  );
}

export default App;
