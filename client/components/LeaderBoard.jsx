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

export default LeaderBoard
