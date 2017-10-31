import React, { PureComponent } from 'react'
import NewGame from '../components/NewGame'
import MakeGuess from '../components/MakeGuess'
import ShowWord from '../components/ShowWord'



class GameContainer extends PureComponent {
  render() {
    return(
      <div>
      <h1> Game </h1>
        <NewGame />
        <MakeGuess />
        <ShowWord />
      </div>
    )
  }
}


export default GameContainer
