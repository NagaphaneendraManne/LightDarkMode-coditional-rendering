// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'light-mode' : 'dark-mode'
    let authButton
    if (isLightMode === true) {
      authButton = (
        <button type="button" onClick={this.onClickButton}>
          Dark Mode
        </button>
      )
    } else {
      authButton = (
        <button type="button" onClick={this.onClickButton}>
          Light Mode
        </button>
      )
    }
    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1>Click To Change Mode</h1>
          {authButton}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
