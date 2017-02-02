import React from 'react'
import ReactDom from 'react-dom'

class EyesOnMe extends React.Component {
  constructor() {
    super()
    this.focusMessage = this.focusMessage.bind(this)
    this.blurMessage = this.blurMessage.bind(this)
  }
  focusMessage(){
    console.log('Good!')
  }
  blurMessage(){
    console.log('Hey! Eyes on me!')
  }
  render(){
    return(
      <div>
        <button onFocus={this.focusMessage} onBlur={this.blurMessage}></button>
      </div>
    )
  }
}

module.exports = EyesOnMe
