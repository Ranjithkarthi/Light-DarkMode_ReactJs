// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLight: false}

  modeTransition = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state

    const modeClass = isLight ? 'light-mode-card' : 'dark-mode-card'
    const modeText = isLight ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="bg-container">
        <div className={modeClass}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.modeTransition}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
