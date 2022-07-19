import React from 'react'
import '../css/About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <p id='about'>About Okey Ben Achike</p>
        <div className='about-message'>
          <p>
            I'm a MERN (mongodb, express, react, nodejs) stack web developer interested in both frontend and backend work and collaboration. I acquired these skills to be useful to you seeking a presence in the web or those desiring to engage my skills. I give my best in my work and always strive  to improve on what I know.
          </p>
          <p>
            I'm open for business.
          </p>
        </div>
        <img src="/assets/about_image_2.jpg" alt="" className='about-image'/>
      </div>
    </section>
  )
}

export default About