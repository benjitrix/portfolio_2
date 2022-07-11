import React, { useState } from 'react'
import Message from './Message'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import '../css/Contact.css'

const Contact = ({alert}) => {
  const [enquirer, setEnquirer] = useState({name: '', email: '', message: ''})
  const [showMessage, setShowMessage] = useState(true)

  const onChangeHandler = (e) => {
    setEnquirer({...enquirer, [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(enquirer);
    setEnquirer({name: '', email: '', message: ''})
    alert(showMessage)
  }

  const submitContactHandler = () => {

  }

  return (
    <section className="contact">
      <div className="contact-container">
        <p>Contact Me</p>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Name</label>
            <input 
              type="text"
              name="name"
              value={enquirer.name} 
              onChange={(e) => onChangeHandler(e)}
              className='contact-input'
            />
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={enquirer.email}
              onChange={onChangeHandler}
              className='contact-input'
            />
            <label>Message</label>
            <textarea 
              type="text"
              name="message"
              value={enquirer.message} 
              onChange={onChangeHandler}
              className='contact-input contact-message'
            />
          </div>
          <input 
            type="submit" 
            value="Send"
            className='contact-send-btn'
          />
        </form>
        <hr />
        <div className='LinkedIn-whatsapp'>
          <button 
            onClick={submitContactHandler} 
            className='contact-btn'>
            <FaLinkedin  />
          </button>
          <button 
            onClick={submitContactHandler} 
            className='contact-btn'>
            <FaWhatsapp  />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact