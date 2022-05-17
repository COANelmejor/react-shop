import React, { Component } from 'react'

function ComponentWrapper(WrapperComonent) {
    class Wrapper extends Component {
        render() {
            return (
                <div>
                    <WrapperComonent {...this.props}/>
                </div>
            )
        }
    }
    return Wrapper;
}

export default ComponentWrapper;