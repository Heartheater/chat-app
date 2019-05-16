import React from 'react'
import Message from './Message'
export default ({messages}) => {
    console.log(messages)
    return (
        <ul className="message-container">
            {messages.map((msg,i) => {
                return (
                    <Message 
                    messageData = {msg}
                    key={`msg-${i}`}
                    />
                )
            })}
        </ul>
    )
}