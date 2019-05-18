import React, {useState} from 'react'

export default ({sendMessage}) => {
    const [message, setMessage] = useState('')
    return (
        <form
            className="message-form"
            onSubmit={(e) => {
                e.preventDefault()
                sendMessage(message)
                setMessage('')
            }}
        >
            <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type a message... "
            type="text" 
            className="message-input"
            />
        </form>
      )
}