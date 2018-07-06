import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Board from './Board'
import LeaderBoard from './LeaderBoard'
import Score from './Score'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(good) {

    if (good) {
      this.setState({
        score: (this.state.score + 1),
      }
      )
    } else {
      this.setState({
        score: (this.state.score - 5),
      }
      )
    }
  }

  render() {
    const board = <Board updateScore={this.updateScore} />
    return (
      <Router>
        <section className='section hero is-full-height is-bold'>
          <h1 style={{ marginBottom: '5vw' }} className='is-size-1 has-text-dark has-text-centered'>NOOB STONE OF DOOM</h1>
          <Board updateScore={this.updateScore} />
          <Route exact path="/leaderboard" component={LeaderBoard} />
          <div className='score'>
            <h3>Your Score is: {this.state.score}</h3>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
