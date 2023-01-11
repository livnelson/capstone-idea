import React, { useState, useEffect } from 'react'
import Logout from './Logout'
import './Nav.css'


function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        handleShow(true)
      } else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [])

  return (
    <div className={`nav ${show && 'nav-black'}`} >
      <img
        className='nav-logo'
        src='./myflix-logo.png'
        alt='MYFLIX-LOGO'
      />
      <div className='logout-button'>
      <Logout />
      </div>
      <img
        className='nav-avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Name'
      />
    </div>
  )
}

export default Nav