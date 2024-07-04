import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Header.css';
import logo from '../assets/collabee.png';

const Header = ({ title }) => {
    return (
        <header>
            <Helmet>
                <title>{title ? `${title} - COLLAB` : 'COLLAB'}</title>
            </Helmet>
            <div className="navbar">
                <div>
                    <Link to="/" ><img src={logo} alt="Collab logo" width={110} height={40} /></Link>
                </div>
                <div>
                    <Link to="/login" ><p className='loginButton text-sm text-white'>Get Started</p></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
