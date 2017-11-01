import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import updateGuesses from '../actions/updateGuesses'
import updateWrongGuess from '../actions/updateWrongGuess'

class MakeGuess extends PureComponent {


  constructor(props) {
    super()
    const { guess } = props
    this.state = {
      guess,
    }
  }

  handleChange(event, value) {
    this.setState ({
      guess: event.target.value
    })
  }

  wrongGuesses(guess) {
    return guess
  }

  submitGuess(event){
    event.preventDefault()
    this.props.updateGuesses(this.state.guess)
    const { word } = this.props
    const wrongGuess = this.wrongGuesses(this.state.guess)
    if (word.indexOf(this.state.guess) === -1) {
      this.props.updateWrongGuess(wrongGuess)
    }
    this.setState ({
      guess: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitGuess.bind(this)}>
          <label>Guess:
          <input type="text" value={this.state.guess} onChange={this.handleChange.bind(this)} />
          </label>
        <button onClick={this.submitGuess.bind(this)}>Make Guess</ button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guess }) => ({ word, guess })

const mapDispatchToProps = { updateGuesses, updateWrongGuess }
export default connect(mapStateToProps, mapDispatchToProps)(MakeGuess)
