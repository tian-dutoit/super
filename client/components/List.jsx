import React from 'react'
import {Link} from 'react-router-dom'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
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
    )
  }
}

export default List
