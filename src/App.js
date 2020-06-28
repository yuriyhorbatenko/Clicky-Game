import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCards from "./components/GameCards";
import fighters from "./fighters.json";

let Games = 0;
let correctGuesses = 0;
let bestScore = 0;
let GameMessage = "Click on a Fighter Card to Start a Game!";

class App extends Component {

  state = {
    fighters,
    correctGuesses,
    bestScore,
    GameMessage
  };

  gameLogic = id => {

    const fighters = this.state.fighters.filter(fighter => fighter.id === id);

    if (fighters[0].clicked) {

      correctGuesses = 0;
      GameMessage = "You Already Clicked on this Fighter Card, Game Over!"

      for (let i = 0; i < Games.length; i++) {
        Games[i].clicked = false;
      }

      this.setState({ Games }, { correctGuesses }, { GameMessage });

      console.log(GameMessage)
      console.log("Games: " + Games)
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

    }

  };


  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.fighters.map(fighter => (
          <GameCards
            gameLogic={this.gameLogic}
            id={fighter.id}
            key={fighter.id}
            name={fighter.name}
            image={fighter.image}
          />
        ))}
      </Wrapper>
    );
  }



}





export default App;
