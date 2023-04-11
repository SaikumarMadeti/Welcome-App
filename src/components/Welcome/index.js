// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isClicked = () => {
    this.setState(previousText => ({isClicked: !previousText.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy learning</p>
        <div>
          <button type="button" className="button" onClick={this.isClicked}>
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
