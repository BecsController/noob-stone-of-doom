import React from 'react'
import {connect} from 'react-redux'
import {requestUsers} from '../actions/index'

class LeaderBoard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      users: []
    }
  }

    componentDidMount(){
      this.props.dispatch(requestUsers())
    }

    componentWillReceiveProps (nextprops) {
      this.setState ({
        users: nextprops.users
      })
    }

  render(){
    const users = this.state.users.sort((a,b) => b.highscore - a.highscore)
    return (
      <div style={{backgroundColor: 'green'}} className='box columns has-text-centered is-three-quarters'>
      <div style={{marginLeft: '20vw', width: '50vw',float: 'center'}} className="box column is-8">
        <h2 className="is-size-1 has-text-link">Leaderboard</h2>
        <table>
        <tbody>
          <tr>
            <th style={{marginRight: '20vw', width: '20vw'}} className="is-size-3 has-text-primary">Player</th>
            <th className="is-size-3 has-text-primary">High Score</th>
          </tr>
        {users.map(user => (
          <tr>
            <td className="is-size-4">{user.name}</td>
            <td className="is-size-4">{user.highscore}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(LeaderBoard)
