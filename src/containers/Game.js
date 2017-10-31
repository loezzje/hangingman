import React, { PureComponent } from 'react'
import NewGame from '../components/NewGame'
import MakeGuess from '../components/MakeGuess'



class GameContainer extends PureComponent {
  render() {
    return(
      <div>
      <h1> Game </h1>
        <NewGame />
        <MakeGuess />
      </div>
    )
  }
}


export default GameContainer
