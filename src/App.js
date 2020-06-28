import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCards from "./components/GameCards";
import fighters from "./fighters.json";


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

    const fighters = this.state.fighters.filter(fighter => fighter.id === id);


    if (fighters[0].clicked) {

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

      fighters[0].clicked = true;
      correctGuesses++;
      gameMessage = "You Successfully Guessed a Fighter Card!"

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
      }

      // fighters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ gameMessage });
      this.setState({ fighters });
      this.setState({ correctGuesses });
      this.setState({ bestScore });

      console.log(gameMessage)
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

    }


    else {

      fighters[0].clicked = true;
      correctGuesses = 0;
      bestScore = 12;
      gameMessage = "You Won! Fatality!!!"

      for (let i = 0; i < fighters.length; i++) {
        fighters[i].clicked = false;
      }

      // fighters.sort(function (a, b) { return 0.5 - Math.random() });

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
        <Title>Friends List</Title>

        <h3 className="scoreSummary">
          {this.state.gameMessage}
        </h3>

        <h3 className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses}
          <br />
                    Best Score: {this.state.bestScore}
        </h3>

        {this.state.fighters.map(fighter => (
          <GameCards
            gameLogic={this.gameLogic}
            id={fighter.id}
            key={fighter.id}
            image={fighter.image}
          />
        ))}

      </Wrapper>
    );
  }



}





export default App;
