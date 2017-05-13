import React, { Component } from 'react';

class EyesOnMe extends Component {
  constructor() {
    super()

    this.blurHandler = this.blurHandler.bind(this)
    this.focusHandler = this.focusHandler.bind(this)
  }

  focusHandler() {
    console.log('Good!')
  }

  blurHandler() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <form>
        <button onFocus={() => this.focusHandler()} onBlur={() => this.blurHandler()} />
      </form>
    )
  }
}

module.exports = EyesOnMe;
