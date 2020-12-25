import React, {Component} from 'react'

class Cell extends Component{
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (<div style={{backgroundColor: this.state.color}}
                className={'cell'}
                onClick = {this.handleClick}
        ></div>)
    }

    
}

export default Cell 

