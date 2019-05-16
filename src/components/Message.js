import React from 'react'

export default ({messageData}) => {
    return (
        <li key={messageData.id} className="message">
            <p className="sender-name">
                {messageData.senderId}
            </p>
            <p className="message-text">
                {messageData.text}
            </p>
        </li>
    )
}