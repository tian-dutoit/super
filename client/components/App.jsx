import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'
import List from './List'
import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render () {
    return (
      <Router>
        <div className="app">
          <h1>Super</h1>
          <Route exact path='/' render={() => <List addItem={this.addItem}/>} />
          <Route path='/compare' render={() => <Countdown shoppingList={this.state}/> }/>
          <Route path='/compare' render={() => <NewWorld shoppingList={this.state}/> }/>
        </div>
      </Router>
    )
  }
}

export default App
