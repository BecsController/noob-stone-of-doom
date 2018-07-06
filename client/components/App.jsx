import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Board from './Board'
import LeaderBoard from './LeaderBoard'

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Router>
        <div className='app'>
          <h1>NOOB STONE OF DOOM</h1>
          <Route exact path="/" component={LeaderBoard} />
        </div>
      </Router>
    )
  }
}

export default App
