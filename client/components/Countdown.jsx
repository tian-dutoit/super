import React from 'react'
import request from 'superagent'
import {getWidgets} from '../api'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      widgets: [{name: 'test'}]
    }
    this.getCountdown = this.getCountdown.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
  }

  componentDidMount () {
    this.getCountdown()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  getCountdown (err) {
    this.setState({
      error: err
    })
    getWidgets(this.renderWidgets)
  }

  render () {
    return (
      <div>
        <h1>The countdown is here</h1>
        {this.state.widgets.map(widget => {
          return (
            this.props.shoppingList.itemOne === widget.name &&
          <p key={widget.id}>{widget.name}</p>
          )
        })}
        <p>{this.props.shoppingList.itemOne}</p>
      </div>
    )
  }
}

export default Countdown
