import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createGame from '../actions/createGame'
import words from '../fixtures/words'


class NewGame extends PureComponent {


  startNewGame() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    this.props.createGame(randomWord)
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
