import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewGame from '../components/NewGame'
import MakeGuess from '../components/MakeGuess'
import ShowWord from '../components/ShowWord'
import WrongGuessCount from '../components/WrongGuessCount'
import Winner from '../components/Winner'



class GameContainer extends PureComponent {

gameStarted() {
  const { word } = this.props
  return (word.length > 0 )
}

  render() {
    const {gameFinished} = this.props
    if (!this.gameStarted()) {
    return(
      <div>
      <h1> Game </h1>
        <NewGame />
        </div>
      )}
      else if (gameFinished) {
        return (
        <div>
        <h1> Game </h1>
        <Winner />
        </div>
      )
      }
      else {
        return (
        <div>
        <h1> Game </h1>
        <MakeGuess />
        <ShowWord />
        <WrongGuessCount />
        <Winner />
        </div>
      )
      }
  }
}

const mapStateToProps = ({word, gameFinished}) => ({word, gameFinished})
export default connect(mapStateToProps)(GameContainer)
