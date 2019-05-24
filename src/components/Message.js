import React from 'react'
import styled from 'styled-components'

export default ({messageData}) => {
    let msgContent = messageData.text ? messageData.text : messageData.parts[0].payload.content
    
    return (
        <Message key={messageData.id}>
            <SenderName>
                {messageData.senderId}
            </SenderName>
            <MessageContent className="message-content">
                {msgContent}
            </MessageContent>
        </Message>
    )
}

const Message = styled.li`
    display:flex;
`
const SenderName = styled.p`
    margin-right: 20px;
    padding: 7px 0;
    font-size: 20px;
`
const MessageContent = styled.p`
    background-color: #aacedd;
    padding: 10px 15px;
    max-width: 60vw;
    min-height: 5px;
    border-radius: 7px;
    text-align: left;
`
