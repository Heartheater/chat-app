import React, {useState} from 'react'
import styled from 'styled-components'

export default ({sendMessage}) => {
    const [message, setMessage] = useState('')
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                sendMessage(message)
                setMessage('')
            }}
        >
            <MessageInput
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type a message... "
            type="text" 
            />
        </form>
      )
}

const MessageInput = styled.input`
    border: solid #dfdfdf 1px;
    background-color: white;
    width: 90vw;
    max-width: 600px;
    padding: 10px;
`
