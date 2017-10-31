import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createGame from '../actions/createGame'


class NewGame extends PureComponent {


  startNewGame() {
    this.props.createGame()
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
