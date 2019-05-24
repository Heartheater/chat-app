import React from 'react'
import Message from './Message'
import styled from 'styled-components'

export default ({messages}) => {
    console.log(messages)
    return (
        <MessageContainer>
            {messages.map((msg,i) => {
                return (
                    <Message 
                    messageData = {msg}
                    key={`msg-${i}`}
                    />
                )
            })}
        </MessageContainer>
    )
}

const MessageContainer = styled.ul`
    width: 90vw;
    max-width: 1000px;
    margin: auto;
    height: 60vh;
    overflow-y: scroll;
    padding: 10px 20px;
    border-top: solid #dfdfdf 2px;
`