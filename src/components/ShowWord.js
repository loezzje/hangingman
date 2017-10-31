import React, { PureComponent } from 'react';
import { connect } from 'react-redux'



class ShowWord extends PureComponent {

  // constructor(props) {
  //   super()
  //   const { word } = props
  //   this.state = {
  //     word: word || 'Hi',
  //   }
  // }


  showWord() {
    const { guesses, word } = this.props
    if (word.length === 0) {
      return "Create a new game first!"
    }
    else {
    var wordArray =  word.split("");
    var letterInWord = wordArray.map(letter => guesses.includes(letter)? letter : "_");
    var showWord = letterInWord.join(" ")
    return showWord
  }
  }



  render() {

    return(
      <div>
        <p>The word: {this.showWord()} </p>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
export default connect(mapStateToProps)(ShowWord)
