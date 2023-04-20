import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'


import './Header.css'

import { Link } from 'react-router-dom'

function Header({isLogged}) {
    

  return (
    <header>
        <div className="logo">
            <h1>orgavault</h1>
        </div>
        <div className="right">
            <nav>
                <Link to={'/'}><button className='button-nav'>Home</button></Link>
                <Link to={'/dash'}><button className='button-nav'>Apps</button></Link>
                <Link to={'/about'}><button className='button-nav'>About</button></Link>
            </nav>
            <hr />
            <div className="btns">
                <button><FontAwesomeIcon icon={faGear}/></button>
                <Link to={isLogged? '/profile' : '/register'}><button><FontAwesomeIcon icon={faUser}/></button></Link>
            </div>
        </div>
    </header>
  )
}

export default Header