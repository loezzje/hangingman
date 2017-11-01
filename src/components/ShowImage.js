import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'



class ShowImage extends PureComponent {


  showImage(wrongGuessCount) {
    const {gameFinished} = this.props
    if (wrongGuessCount < 6 && gameFinished === true) {
      return image7
    }
    else if(wrongGuessCount === 0) {
      return null
    }
    else if (wrongGuessCount === 1) {
      return image1
    }
    else if (wrongGuessCount === 2) {
      return image2
    }
    else if (wrongGuessCount === 3) {
      return image3
    }
    else if (wrongGuessCount === 4) {
      return image4
    }
    else if (wrongGuessCount === 5) {
      return image5
    }
    else if (wrongGuessCount === 6) {
      return image6
    }
  }

  render() {
    const { wrongGuesses } = this.props
    return(
      <div>
        <img src={this.showImage(wrongGuesses.length)} alt='' />
      </div>
    )
  }
}

const mapStateToProps = ({ wrongGuesses, gameFinished }) => ({ wrongGuesses, gameFinished })
export default connect(mapStateToProps)(ShowImage)
