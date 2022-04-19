import { Component } from 'react'

// a class is like a factory (like a factory of chairs)
// the chair that comes out of the factory is called an INSTANCE of the class
// one of the skills of classes is the ability of extending others
// classes can INHERIT from others
// Component is the main class React exposes to us

// 'this' is pointing to the current INSTANCE of the class component
// 'this' will always be an object

class WelcomeClass extends Component {
  state = {
    // the state object is like a "memory" for our component
    // it can remember things over time and keep track of changes
    // the state object is READ-ONLY (we can read from it, but we cannot change it DIRECTLY)
    // it's not accessible from outside
    counter: 0,
  }

  render() {
    return (
      <div style={{ color: 'yellow' }}>
        <h1>{this.props.title || 'Default Text'}</h1>
        <p>{this.props.subTitle || 'Default Subtitle'}</p>
        <br />
        <button
          onClick={() =>
            // let's increase the counter
            // this.state.counter++ // <-- super wrong!
            this.setState({ counter: this.state.counter + 1 })
          }
        >
          +
        </button>
        <p>The value of counter in the state is: {this.state.counter}</p>
        <button
          onClick={() =>
            // let's decrease the counter now
            this.setState({ counter: this.state.counter - 1 })
          }
        >
          -
        </button>
      </div>
    )
  }
}

export default WelcomeClass

// functional components (easier to write, less capabilites)
// class components (more complex to write, more powerful)
