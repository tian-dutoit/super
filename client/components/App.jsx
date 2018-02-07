import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'


class App extends React.Component {
  constructor () {
    super ()
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>The app is here</h1>
        <Countdown />
        <NewWorld />
      </div>
    )
  }
}


export default App
