import React from 'react'
import Bubble from './Bubble'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0
    }
  }



  render() {
    const width = window.innerWidth * 0.8
    const height = window.innerHeight * 0.8
    console.log(width, height)
    return (
      <div className="board" style={{width: width, height: height}}>
        <svg width={width} height={height} style={{backgroundColor: "pink"}}>
        <Bubble />

        </svg>
      </div>
    )
  }


}



export default Board