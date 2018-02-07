import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'

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
      <div>
        <h1>The app is here</h1>
        <div>
          <form>
            <input name="itemOne" onChange={this.addItem}/> <br/>
            <input name="itemTwo" onChange={this.addItem} /> <br/>
            <input name="itemThree" onChange={this.addItem} /> <br/>
            <input name="itemFour" onChange={this.addItem} /> <br/>
            <input name="itemFive" onChange={this.addItem} /> <br/>
            <input type = "button" value="Press me" onClick={this.handleSubmit}/>
          </form>
        </div>
        <Countdown shoppingList={this.state}/>
        <NewWorld shoppingList={this.state}/>
      </div>
    )
  }
}

export default App
