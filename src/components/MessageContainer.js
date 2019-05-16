import React from 'react'
import Message from './Message'
export default ({messages}) => {
    return (
        <ul className="message-container">
            {messages.map( (msg) => {
                return (
                    <Message 
                    messageData = {msg}
                    />
                )
            })}
        </ul>
    )
}