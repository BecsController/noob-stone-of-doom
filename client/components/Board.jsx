import React from 'react'
import Bubble from './Bubble'
import { connect } from 'react-redux';
import {requestBubbles} from '../actions/index'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      bubbles: [],
      playerScore:0
    }
  }

  componentDidMount(){
    this.props.dispatch(requestBubbles())
  }

  render() {
    const bubbles = this.props.bubbles
    const width = window.innerWidth * 0.8
    const height = window.innerHeight * 0.8
    //console.log(bubbles)
    return (

      <div className="board" style={{width: width, height: height}}>
        <svg width={width} height={height} style={{backgroundColor: "pink"}}>
        {bubbles.map(bubble => {
          return (
          <Bubble {...bubble} width={width} height={height} updateScore={this.props.updateScore}/>
        )
      })}

        </svg>
      </div>
      
    )
  }


}

function mapStateToProps(state) {
  return {
    bubbles: state.bubbles
  }
}

export default connect(mapStateToProps)(Board)
