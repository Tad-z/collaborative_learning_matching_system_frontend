import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <div>
                    <p href="/" className='text-2xl font-bold'>CollabLearn</p>
                </div>
                <div>
                    <p href="/" className='loginButton text-sm'>Get Started</p>
                </div>
            </div>
        </header>
    )
}

export default Header