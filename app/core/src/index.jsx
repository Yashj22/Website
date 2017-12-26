import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        Home page :)
      </div>
    );
  }
}

console.log('here we are')

render(<App />, document.getElementById('app'))