// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  speedAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brakeAccelerate = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speed-container">
          <h1 className="heading"> SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="speedometer-heading">Speed is {speed}mph</h1>
          <p className="speed-paragraph">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="button-container">
            <button
              className="button1"
              onClick={this.speedAccelerate}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="button2"
              onClick={this.brakeAccelerate}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
