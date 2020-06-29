import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCards from "./components/GameCards";
import fighters from "./fighters.json";
import "./App.css";

let shuffle = require('shuffle-array')
let correctGuesses = 0;
let bestScore = 0;
let gameMessage = "Click on a Fighter Card to Start a Game!";

class App extends Component {

  state = {
    fighters,
    correctGuesses,
    bestScore,
    gameMessage
  };

  gameLogic = id => {

    const fighters = this.state.fighters
    const fightersCards = fighters.filter(fighter => fighter.id === id);


    if (fightersCards[0].clicked) {

      correctGuesses = 0;
      gameMessage = "You Already Clicked on this Fighter Card, Game Over!"

      for (let i = 0; i < fighters.length; i++) {
        fighters[i].clicked = false;
      }

      this.setState({ gameMessage });
      this.setState({ fighters });
      this.setState({ correctGuesses });
      this.setState({ bestScore });

      console.log(gameMessage)
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

    }


    else if (correctGuesses < 11) {

      fightersCards[0].clicked = true;
      correctGuesses++;
      gameMessage = "Guessed a Fighter Card!"

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
      }

      shuffle(fighters)

      this.setState({ gameMessage });
      this.setState({ fighters });
      this.setState({ correctGuesses });
      this.setState({ bestScore });

      console.log(gameMessage)
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

    }


    else {

      fightersCards[0].clicked = true;
      correctGuesses = 0;
      bestScore = 12;
      gameMessage = "You Won! Fatality!!!"

      for (let i = 0; i < fighters.length; i++) {
        fighters[i].clicked = false;
      }

      shuffle(fighters)

      this.setState({ gameMessage });
      this.setState({ fighters });
      this.setState({ correctGuesses });
      this.setState({ bestScore });

      console.log(gameMessage)
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

    }

  };



  render() {
    return (

      <Wrapper>
        <Title>
          <div className="title">
            Mortal Kombat Clicky Game
          </div>

          <div className="live-results">

            <h2 className="gameMessage">
              {this.state.gameMessage}
            </h2>

            <h2 className="correctGuesses">
              Correct Guesses: {this.state.correctGuesses}
            </h2>

            <h2 className="bestScore">
              Best Score: {this.state.bestScore}
            </h2>

          </div>
        </Title>

        <div className="allCards">
          {this.state.fighters.map(fighter => (

            <GameCards
              gameLogic={this.gameLogic}
              id={fighter.id}
              key={fighter.id}
              image={fighter.image}
            />
          ))}
        </div>

      </Wrapper>
    );
  }
}


export default App;