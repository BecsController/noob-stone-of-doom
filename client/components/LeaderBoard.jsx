import React from 'react'

const usersData = [
  {id: 1, name: 'Ross', highscore: 100},
  {id: 2, name: 'Hayden', highscore: 1000},
  {id: 3, name: 'Cate', highscore: 999},
  {id: 4, name: 'Cliff', highscore: 10},
  {id: 5, name: 'Rebecca', highscore: 998}
]

class LeaderBoard extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const users = usersData.sort((a,b) => b.highscore - a.highscore)
    return (
      <div>
        <h2>Leaderboard</h2>
        <table>
          <tr>
            <th>Player</th>
            <th>High Score</th>
          </tr>
        {users.map(user => (
          <tr>
            <td>{user.name}</td>
            <td>{user.highscore}</td>
          </tr>
        ))}
        </table>
      </div>
    )
  }
}

export default LeaderBoard
