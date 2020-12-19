import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {


  genRow = (vals) => {
    console.log(`this is vals ${vals}`)
    return vals.map(val => <Cell value={val} />)
  }

  genMatrix = () => {
    // console.log(` this is props.values ${this.props.values}`)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: [['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],]
}
