import React from 'react'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>The countdown is here</h1>
        <p>{this.props.shoppingList.itemOne}</p>
      </div>
    )
  }
}

export default Countdown
