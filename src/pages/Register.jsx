import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Register.css'

function Register() {
    return (
        <div className='Register'>
            <form action="">
                <h1>Hello user</h1>
                <br />
                <input type="text" required placeholder='Full Name' />
                <input type="text" required placeholder='Username' />
                <input type="password" required placeholder='Password' />
                <input type="password" required placeholder='Confirm Password' />
                <input type="email" required placeholder='Email' />
                <br />
                <input type="submit" value={'Register'}/>
                <br />
                <p>do you have an account ? <Link to={'/login'}>Login</Link></p>
            </form>
        </div>
    )
}

export default Register