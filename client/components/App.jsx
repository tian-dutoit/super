import React from 'react'
import Compare from './Compare'
import List from './List'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {postList} from '../api'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.addItem = this.addItem.bind(this)
    // this.handlePress = this.handlePress.bind(this)
    // this.renderList = this.renderList.bind(this)

  }
  addItem (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // handlePress () {
  //   postList(this.state, this.renderList)
  // }
  //
  // renderList (countdownItems) {
  //   this.setState({
  //   countdown: countdownItems.body.shopping || {}
  //   })
  // }

  render () {
    return (
      <Router>
        <div>
          <h1>The app is here</h1>
          <Route exact path='/' render={() => <List addItem={this.addItem} handlePress={this.handlePress} />} />
          <Route path='/compare' render={() => <Compare shoppingList={this.state}/> }/>
        </div>
      </Router>
    )
  }
}

export default App
