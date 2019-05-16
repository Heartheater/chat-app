import React from 'react'

export default ({messageData}) => {
    return (
        <li key={messageData.id}>
            <div>
                {messageData.senderId}
            </div>
            <div>
                {messageData.text}
            </div>
        </li>
    )
}