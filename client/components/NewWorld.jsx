import React from 'react'
import {postList} from '../api'

class NewWorld extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total: 0,
      newWorld: [{name: 'initial'}]
    }
    this.renderList = this.renderList.bind(this)
    this.total = this.total.bind(this)
  }

  componentDidMount () {
    postList(this.props, this.renderList)
  }

  renderList (newWorldItems) {
    this.setState({
      newWorld: newWorldItems.body.newW || {}
    })
    this.total()
  }

  total () {
    let count = 0
    for (let i = 0; i < this.state.newWorld.length; i++) {
      count += this.state.newWorld[i].price
    }
    this.setState({
      total: count
    })
  }

  render () {
    return (
      <div className="world">
        <h1>New World</h1>
        {this.state.newWorld.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.product} ${item.price}</p>
            </div>
          )
        })}
        <p><strong>Total: ${this.state.total}</strong></p>

      </div>
    )
  }
}

export default NewWorld
