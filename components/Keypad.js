import React, { Component } from 'react';

class KeyPad extends Component {
  constructor() {
    super();

    this.typeHandler = this.typeHandler.bind(this);
  }

  typeHandler() {
    console.log('Entering password...')
  }

  render() {
    return (
      <form>
        <input type='password' onKeyUp={() => this.typeHandler()} />
      </form>
    );
  }
}

module.exports = KeyPad;
