import React, { Component } from 'react';

export default class Cell extends Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super(props)
      this.state = {
        color: props.value
      }
    }
   
    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
      const newColor = '#333'
      this.setState({
        color: newColor
      })
    }
   
    render() {
      return (
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.increment}>
          {this.state.color}
        </div>
      )
    }
}