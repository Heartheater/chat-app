import React, {Component} from 'react'
import './App.css'
import MessageContainer from './components/MessageContainer'


class App extends Component{
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }
  render() {
    return (
      <div className="App">
        <MessageContainer messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
