import React from 'react'
import {getWidgets} from '../api'

class NewWorld extends React.Component {
  constructor () {
    super()
    this.state = {
      widgets: [{name: 'test'}]
    }

    this.getWorld = this.getWorld.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
  }

  componentDidMount () {
    this.getWorld()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  getWorld (err) {
    this.setState({
      error: err
    })
    getWidgets(this.renderWidgets)
  }

  render () {
    return (
      <div>
        <h1>The New World is here</h1>
        {this.state.widgets.map(widget => {
          return (
            this.props.shoppingList.itemTwo === widget.name &&
        <p key={widget.id}>{widget.name}</p>
          )
        })}
        <p>{this.props.shoppingList.itemOne}</p>
      </div>
    )
  }
}

export default NewWorld
