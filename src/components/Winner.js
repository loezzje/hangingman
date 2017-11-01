import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class Winner extends PureComponent {
  isWinner() {
    const { guesses, word } = this.props
    if (word.length === 0) {
      return false
    }
    var wordArray = word.split("");
    var letterInWord = wordArray.map(letter => guesses.includes(letter))
    return (((letterInWord.reduce((result, l) => result + l)) === (word.length)))
  }

  render() {
    const {wrongGuesses} = this.props
    if (!this.isWinner()&& wrongGuesses.length >= 6) {
    return(
      <div>
        <p>You Loose!</p>
      </div>
    )
  }
  else if (this.isWinner()) {
    return(
      <div>
        <p>You Win!</p>
      </div>
    )
  }
  else {
    return (null)
  }
}
}

const mapStateToProps = ({ word, guesses, wrongGuesses }) => ({ word, guesses, wrongGuesses })
export default connect(mapStateToProps)(Winner)
