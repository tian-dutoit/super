import React from 'react'
import {Link} from 'react-router-dom'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 'test'
    }
  }

  render () {
    return (
      <div className="list">
        <form>
          <input name="itemOne" onChange={this.props.addItem}/> <br/>
          <input name="itemTwo" onChange={this.props.addItem} /> <br/>
          <input name="itemThree" onChange={this.props.addItem} /> <br/>
          <input name="itemFour" onChange={this.props.addItem} /> <br/>
          <input name="itemFive" onChange={this.props.addItem} /> <br/>
          <Link to='/compare'> <input type = "button" value="Press me" onClick={this.props.handlePress}/></Link>
        </form>
      </div>
    )
  }
}

export default List
