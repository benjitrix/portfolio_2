import React from 'react'
import '../css/Credentials.css'

const Credentials = () => {
  return (
    <section className="credentials">
      <div className="credentials-container">
        <p>Credentials</p>
        <div className='credentials-content'>
          <img src="/assets/express-symbol.png" alt="" className='credentials-image'/>
          <div className='credentials-list'>
            <div className='education list-item'>
              <p>Education</p>
              <div className='education-details details'>
                <p>&#9642;&nbsp;  Msc Production Engineering</p>
                <pre> (2001-2006)</pre>
                <p>&#9642;&nbsp;  BEng Mechanical Engineering</p>
                <pre> (1993-2000)</pre>
              </div>
            </div>
            <div className='skills list-item'>
              <p>Skills</p>
              <div className='skills-details details'>
                <p>&#9642;&nbsp;  AWS Solutions Architect</p>
                <p>&#9642;&nbsp;  Java</p>
                <p>&#9642;&nbsp;  Gimp</p>
                <p>&#9642;&nbsp;  German</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials