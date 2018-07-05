import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Board from './Board'

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Router>
        <div className='app'>
          <h1>NOOB STONE OF DOOM</h1>
          <Route exact path="/" component={Board} />
        </div>
      </Router>
    )
  }
}

export default App
