import React from 'react'
import {postList} from '../api'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total: 0,
      countdown: [{name: 'test'}]
    }
    this.handlePress = this.handlePress.bind(this)
    this.renderList = this.renderList.bind(this)
    this.total = this.total.bind(this)
  }

  componentDidMount () {
    this.handlePress(this.props)
  }

  handlePress (list) {
    postList(list, this.renderList)
  }

  renderList (countdownItems) {
    this.setState({
      countdown: countdownItems.body.countD || {}
    })
    this.total()
  }

  total () {
    let count = 0
    for (let i = 0; i < this.state.countdown.length; i++) {
      count += this.state.countdown[i].price
    }
    this.setState({
      total: count
    })
  }

  render () {
    return (
      <div className="countdown">
        <h1>Countdown</h1>
        {this.state.countdown.map((item, id) => {
          return (
            <div key={id}>
              <p>{item.product} ${item.price}</p>
            </div>
          )
        })}
        <p><strong>Total: ${this.state.total}</strong></p>

      </div>
    )
  }
}

export default Countdown
