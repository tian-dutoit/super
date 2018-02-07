import React from 'react'
import request from 'superagent'
import Compare from './Compare'
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
        <div>
          <h1>The app is here</h1>
          <Route exact path='/' component={List} />
          <Route path='/compare' render={() => <Compare shoppingList={this.state}/> }/>
        </div>
      </Router>
    )
  }
}

export default App
