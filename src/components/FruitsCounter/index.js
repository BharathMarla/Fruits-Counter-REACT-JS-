// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mango} </span>mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="item-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="item-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onDecrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
        <p className="author">
          Developed by:
          <br /> Bharath Marla
        </p>
      </div>
    )
  }
}

export default FruitsCounter
