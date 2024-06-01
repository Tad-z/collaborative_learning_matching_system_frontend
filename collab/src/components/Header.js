import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header>
            <title>{title ? title + "-COLLAB" : "COLLAB"}</title>
            <div className="navbar">
                <div>
                    <Link to="/" className='text-2xl font-bold'>CollabLearn</Link>
                </div>
                <div>
                    <Link to="/login" className='loginButton text-sm text-white'>Get Started</Link>
                </div>
            </div>
        </header>
    )
}

export default Header