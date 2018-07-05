import React from 'react'

class Bubble extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cx: 100,
      cy: 150,
      r: 10,
      fill: "purple",
      xmove:3,
      ymove:6

    }
    this.bubbleClick = this.bubbleClick.bind(this)
    this.moveBubble = this.moveBubble.bind(this)
  }

  componentDidMount(){
    //maybe this is where we set an interval?
  }

  bubbleClick() {
    //alert("PLAGUE THE GREAT AND POWERFUL SALUTES YOU!!!");
    this.moveBubble()
  }

  moveBubble() {
    console.log('trying to move')
    this.setState({
      cx: this.state.cx + this.state.xmove,
      cy: this.state.cy + this.state.ymove,
    })
    
  }

  render() {
    return (
      <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} fill={this.state.fill} onClick={this.bubbleClick} />
    )
  }

}


export default Bubble