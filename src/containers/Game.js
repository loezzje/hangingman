import React, { PureComponent } from 'react'
import NewGame from '../components/NewGame'



class GameContainer extends PureComponent {
  render() {
    return(
      <div>
      <h1> Game </h1>
        <NewGame />
      </div>
    )
  }
}


export default GameContainer
