import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'

class Compare extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }



  render () {
    const interim = (Object.values(this.props)[0])
    const other = Object.values(interim)
    return (
      <div>
        <h1>The Compare is here</h1>
        <Countdown shoppingList={other}/>
        {/* <NewWorld shoppingList={this.props}/> */}
      </div>
    )
  }
}

export default Compare
