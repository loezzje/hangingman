import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import updateGuesses from '../actions/updateGuesses'
import updateWrongGuess from '../actions/updateWrongGuess'

class MakeGuess extends PureComponent {


  constructor(props) {
    super()
    const { guess, message } = props
    this.state = {
      guess,
      message
    }
  }
  handleChange(event, value) {
      this.setState ({
        guess: event.target.value
      })
  }

  validateGuess() {
    const {guess} = this.state
    if (guess.length > 0 && guess.length <= 1) {
      console.log("helllooo", guess.charCodeAt())
      return (guess.charCodeAt() >= 97 && guess.charCodeAt() <= 122)
    }
  }

  submitGuess(event){
    // event.preventDefault()
    const { guess } = this.state
    if (!this.validateGuess())  {
      this.setState ({
        guess: '',
        message: 'please fill in a letter between a and z'
      })
      return
    }

    this.props.updateGuesses(guess)
    const { word, guesses } = this.props
    if (word.indexOf(guess) === -1 || guesses.includes(guess) ) {
      this.props.updateWrongGuess(guess)
    }
    this.setState ({
      guess: '',
      message: ''
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitGuess.bind(this)}>
          <label>Guess:
          <input type="text" value={this.state.guess} onChange={this.handleChange.bind(this)} />
          </label>
        <button type='button' onClick={this.submitGuess.bind(this)}>Make Guess</ button>
        </form>
        <p> {this.state.message}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

const mapDispatchToProps = { updateGuesses, updateWrongGuess }
export default connect(mapStateToProps, mapDispatchToProps)(MakeGuess)
