import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/about" component={About}/>        
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));