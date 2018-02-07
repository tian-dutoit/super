import React from 'react'
import request from 'superagent'
import Compare from './Compare'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.addItem = this.addItem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    // this will need to be a route to the comparison page

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
          <div>
            <form>
              <input name="itemOne" onChange={this.addItem}/> <br/>
              <input name="itemTwo" onChange={this.addItem} /> <br/>
              <input name="itemThree" onChange={this.addItem} /> <br/>
              <input name="itemFour" onChange={this.addItem} /> <br/>
              <input name="itemFive" onChange={this.addItem} /> <br/>
              <Link to='/compare'> <input type = "button" value="Press Me"/></Link>
            </form>
          </div>
          <Route path='/compare' render={() => <Compare shoppingList={this.state}/> }/>
        </div>
      </Router>
    )
  }
}

export default App
