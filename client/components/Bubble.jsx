import React from 'react'

class Bubble extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      cx: props.initial_x,
      cy: props.initial_y,
      r: props.radius*5,
      fill: props.type == 'good' ? "purple" : "red",
      xmove:randomiseMove()/2.5,
      ymove:randomiseMove()/2.5,
      alive: true,

    }
    this.bubbleClick = this.bubbleClick.bind(this)
    this.moveBubble = this.moveBubble.bind(this)
  }

  componentDidMount(){
    setInterval(this.moveBubble, 10)

  }

  bubbleClick() {
    console.log("PLAGUE THE GREAT AND POWERFUL SALUTES YOU!!!");

    if (this.props.type == 'good') {
      //alert('You scored');
      this.setState({
        alive:false,
      })
    }  else {
      //alert('You lose points!')
    }

    this.props.updateScore(this.props.type == 'good')

  }

  moveBubble() {
    let {id, cx, cy, xmove, ymove} = this.state
    //console.log(`Bubble id ${id} moving from (${cx}, ${cy})`)
    //console.log(`Max bounds are Width: ${this.props.width}, Height: ${this.props.height} `)

    if (cx + xmove > this.props.width || cx + xmove < 0){
      xmove *= -1;
    }

    if (cy + ymove > this.props.height || cy + ymove < 0){
      ymove *= -1;
    }

    this.setState({
      xmove,
      ymove,
      cx: cx + xmove,
      cy: cy + ymove,
    })



  }



  render() {
    //console.log('bubble: ', this.state)
    if (this.state.alive) {
      return (
        <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} fill={this.state.fill} onClick={this.bubbleClick} />
      )
    } else {
      return null;
    }
  }

}

function randomiseMove() {
  let move = (Math.random() *4)+1
  if (Math.random() < 0.5) {
    move *= -1;
  }
  return move;
}

export default Bubble
