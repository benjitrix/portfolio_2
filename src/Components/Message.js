import React, { useEffect, useState } from 'react'
import '../css/Message.css'

const Message = ({show}) => {
  const [displayMessage, setDisplayMessage] = useState(show)
  console.log(show);
  useEffect(() => {
    setTimeout(() => {
      setDisplayMessage(false)
    }, 1500)
  }, [show])
  console.log(displayMessage);
  return (
    <div className={`${displayMessage ? 'message' : 'no-message'}`}>
      <p>Thank you for your enquiry. I shall reply promptly. </p>
    </div>
  )
}

export default Message