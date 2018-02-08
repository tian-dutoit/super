import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'

class Compare extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>The Compare is here</h1>
        <Countdown shoppingList={this.props.shoppingList}/>
        <NewWorld shoppingList={this.props.shoppingList}/>
      </div>
    )
  }
}

export default Compare
