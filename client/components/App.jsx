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
        <section className='section hero is-full-height is-bold'>
          <h1 className='is-size-1 has-text-dark has-text-centered'>NOOB STONE OF DOOM</h1>
          <Route exact path="/" component={Board} />
          <Route exact path='/leaderboard' component={LeaderBoard} />
        </section>
      </Router>
    )
  }
}

export default App
