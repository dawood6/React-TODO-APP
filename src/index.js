import React, { Component } from 'react';
import App from './Todo';
import { render } from 'react-dom'
  

class Todo extends Component {
  render() {
    return(
      <App />
    )
  }
}


render(<Todo />, document.getElementById('root'))




