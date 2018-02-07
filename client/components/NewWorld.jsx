import React from 'react'

class NewWorld extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>The NW is here</h1>
        <p>{this.props.shoppingList.itemTwo}</p>
      </div>
    )
  }
}

export default NewWorld
