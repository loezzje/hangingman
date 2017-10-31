import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import updateGuesses from '../actions/updateGuesses'

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



  submitGuess(event, value){
    event.preventDefault()
    this.props.updateGuesses(this.state.guess)
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

const mapStateToProps = ({ word }) => ({ word })

const mapDispatchToProps = { updateGuesses }
export default connect(mapStateToProps, mapDispatchToProps)(MakeGuess)
