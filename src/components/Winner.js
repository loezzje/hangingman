import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import NewGame from './NewGame'
import updateGame from '../actions/updateGame'



class Winner extends PureComponent {


  isWinner() {
    const { guesses, word } = this.props
    if (word.length === 0) {

      return false
    }
    var wordArray = word.split("");
    var letterInWord = wordArray.map(letter => guesses.includes(letter))
    if (((letterInWord.reduce((result, l) => result + l)) === (word.length))) {

      return true
    }

  }
  render() {
    const {wrongGuesses} = this.props
    if (!this.isWinner()&& wrongGuesses.length >= 6) {
    this.props.updateGame(true)
    return(
      <div>
        <p>You Loose!</p>
        <NewGame />
      </div>
    )
  }
  else if (this.isWinner()) {
    this.props.updateGame(true)
    return(
      <div>
        <p>You Win!</p>
        <NewGame />
      </div>
    )
  }
  else {
    return (null)
  }
}
}

const mapStateToProps = ({ word, guesses, wrongGuesses }) => ({ word, guesses, wrongGuesses })
const mapDispatchToProps = { updateGame }
export default connect(mapStateToProps, mapDispatchToProps )(Winner)
