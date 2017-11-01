import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class WrongGuessCount extends PureComponent {

  showNumberOfGuesses() {
    const { guesses } = this.props
    if (!guesses) {
      return 0
    }
    else {
      return guesses.length
    }
  }

  showNumberOfWrongGuesses() {
    const { wrongGuesses } = this.props
    if (!wrongGuesses) {
      return 0
    }
    else {
      return wrongGuesses.length
    }
  }

  render() {
    return(
      <div>
        <p>Guesses left: {6 - this.showNumberOfWrongGuesses()} </p>
      </div>
    )
  }
}

const mapStateToProps = ({ wrongGuesses, guesses }) => ({ wrongGuesses, guesses })
export default connect(mapStateToProps)(WrongGuessCount)
