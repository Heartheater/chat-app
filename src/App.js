import React, {Component} from 'react'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import MessageContainer from './components/MessageContainer'
import MessageForm from './components/MessageForm'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import * as auth from './misc.json'

class App extends Component{
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator: auth.CHATKIT_INSTANCE_LOCATOR,
      userId: String(auth.CHATKIT_USERNAME),
      tokenProvider: new TokenProvider({
          url: String(auth.CHATKIT_TEST_TOKEN_PROVIDER)
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.setState({currentUser: currentUser})
      this.state.currentUser.subscribeToRoom({
        roomId: auth.CHATKIT_ROOM_ID,
        hooks: {
          //runs each time a new message is posted
          onMessage: (message) => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
      this.state.currentUser.fetchMultipartMessages({
        roomId: auth.CHATKIT_ROOM_ID,
        limit: 2,
        direction: "older"    
      }).then(messages => {
        this.setState({...this.state.messages, messages})
      }).catch(err => {
        console.log(`Error fetching messages: ${err}`)
      })
    })
    .catch(err => console.log(err))
  }

  sendMessage(text) {
    if(text === " " || !text) {
      return;
    }
    text = String(text)
    this.state.currentUser.sendMessage({
      text,
      roomId: auth.CHATKIT_ROOM_ID
    })
  }

  render() {
    return (
      <AppWrapper className="App">
        <Header/>
        <MessageContainer messages={this.state.messages}/>
        <MessageForm sendMessage={this.sendMessage}
        />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  font-size: 17px;
`