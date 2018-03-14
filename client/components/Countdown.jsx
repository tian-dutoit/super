import React from 'react'
import {postList} from '../api'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total: 0,
      countdown: [{name: 'initial'}]
    }
    this.renderList = this.renderList.bind(this)
    this.total = this.total.bind(this)
  }

  componentDidMount () {
    postList(this.props, this.renderList)

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
        <div className="countdownImage">
        </div>
        {this.state.countdown.map((item) => {
          return (
            <div key={item.id}>
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
