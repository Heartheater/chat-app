import React from 'react'

export default ({messageData}) => {
    let msgContent = messageData.text ? messageData.text : messageData.parts[0].payload.content
    
    return (
        <li key={messageData.id} className="message">
            <p className="sender-name">
                {messageData.senderId}
            </p>
            <p className="message-content">
                {msgContent}
            </p>
        </li>
    )
}