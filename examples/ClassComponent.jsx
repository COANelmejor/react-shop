import React, { Component } from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            name: 'React'
        }
    }

    render() {
        return (
        <div>
            <h1>Hello, mundo: {this.state.name }</h1>
        </div>
        )
    }
}

export default App