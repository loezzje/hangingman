import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createGame from '../actions/createGame'


class NewGame extends PureComponent {

  constructor(props) {
    super()
    const {word, guesses, wrongGuesses} = props
    this.state = {
      word: "randomWord",
      guesses: [],
      wrongGuesses: [],
    }

  }

  startNewGame() {
    const {
      word,
      guesses,
      wrongGuesses
    } = this.state

    const newGame = {
      word,
      guesses,
      wrongGuesses,
    }

    this.props.createGame(newGame)
    console.log("you created this", newGame)
  }


  render() {
    return(
      <button type="button" onClick={this.startNewGame.bind(this)}>
        New Game
      </button>
    )
  }
}

const mapDispatchToProps = { createGame }
export default connect(null, mapDispatchToProps)(NewGame)
