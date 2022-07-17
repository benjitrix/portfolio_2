import React from 'react'
import '../css/Landing.css'

const Landing = () => {
  return (
    <section className="landing">
      <div className='landing-container'>
        <img src="/assets/MERN-symbol.png" alt="" className='top-landing'/>
        <div className='mid-landing'>
          <div className='intro'>
            <p>Hi, I'm Okey Ben Achike,</p>
            <p>and I'm a full stack Web Developer.</p>
          </div>
          <img src="/assets/mongodb_symbol.png" alt="" />
        </div>
        <div className='bottom-landing'>
          <div className='bottom-landing-content'>
            <p>I'm ready to work</p>
            <i className="fa fa-long-arrow-right fa_custom fa-2x"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing