import React from 'react'
import Countdown from './Countdown'
import NewWorld from './NewWorld'


class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      shoppingList: []
    }
    this.addItem=this.addItem.bind(this)
  }
  addItem(evt){
    let list = []
    list.push(evt.target.value)
    console.log(list)
  }
  render () {
    return (
      <div>
        <h1>The app is here</h1>
        <div>
        <form>
          <input name='itemOne' /> <br/>
          <input name='itemTwo' /> <br/>
          <input name='itemThree' /> <br/>
          <input name='itemFour' /> <br/>
          <input name='itemFive' /> <br/>
          <button type = 'button' onClick={this.addItem}>Press me</button>
        </form>
        </div>
        <Countdown />
        <NewWorld />
      </div>
    )
  }
}


export default App
