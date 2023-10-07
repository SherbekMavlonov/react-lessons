import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  inc = () => {
    // Bunday yozmang
    // this.state.counter = this.state.counter + 1
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  dec = () => {
    // Bunday yozmang
    // this.state.counter = this.state.counter - 1
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  // componentDidMount(){}
  // componentDidUpdate(){}
  // componentWillUnmount(){}
  // componentWillMount(){}

  // Error boundary
  // componentDidCatch(){}
  render() {
    const { state, inc, dec } = this
    return (
      <>
        {/* <h1>{this.props.text}</h1> */}

        <h1>{state.counter}</h1>
        <button className='btn btn-success' onClick={inc}>
          +
        </button>
        <button className='btn btn-success' onClick={dec}>
          -
        </button>
      </>
    )
  }
}

export default Counter
