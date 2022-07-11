import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import '../css/Header.css'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)

  const openCloseMenu = () => {
    setOpenMenu(!openMenu)
    setOpenMenu(true)
  }

  return (
    <section className="nav">
      <div className="nav-container">
        <div className="image-hamburger">
          <div className="photo-name">
            <img src="/assets/Okey.jpg" alt='' className='my-picture' />
            <div>
              <h1>Okey Ben Achike</h1>
              <h3>Web Developer</h3>
            </div>
          </div>
          {
            openMenu ? 
            <FaBars className='hamburger-times' onClick={() => setOpenMenu(!openMenu)}/> : 
            <FaTimes className={`hamburger-times ${!openMenu ? 'show-times' : ''}`} onClick={() => setOpenMenu(!openMenu)}/>
          }
        </div>
        <div className={`links ${openMenu ? 'no-links' : ''}`}>
          <div className='link-container'>
            <Link 
              to='/' 
              className="link" 
              onClick={openCloseMenu}
            >
              Home
            </Link>
            <Link 
              to='/about' 
              className="link" 
              onClick={openCloseMenu}
            >
              About
            </Link>
            <Link 
              to='/projects' 
              className="link" 
              onClick={openCloseMenu}
            >
              Projects
            </Link>
            <Link 
              to='/contact'  
              className='link' 
              onClick={openCloseMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header