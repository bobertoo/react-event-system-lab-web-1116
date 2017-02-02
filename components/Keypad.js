import React from 'react'
import ReactDom from 'react-dom'

class Keypad extends React.Component {
  constructor() {
    super();

    this.message = this.message.bind(this);
  }

  message() {
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        <form>
          <input type='password' onKeyUp={this.message} />
        </form>
      </div>
    )
  }
}

module.exports = Keypad
