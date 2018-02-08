import React from 'react'
import {Link} from 'react-router-dom'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 'test'
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
      <div>
        <form>
          <input name="itemOne" onChange={this.props.addItem}/> <br/>
          <input name="itemTwo" onChange={this.props.addItem} /> <br/>
          <input name="itemThree" onChange={this.props.addItem} /> <br/>
          <input name="itemFour" onChange={this.props.addItem} /> <br/>
          <input name="itemFive" onChange={this.props.addItem} /> <br/>
          <Link to='/compare'> <input type = "button" value="Press Me"/></Link>
        </form>
      </div>
    )
  }
}

export default List
