import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../helpers/api';
import logo from '../assets/collabee.png';

const HeaderAuth = ({ title }) => {
    const clickHandler = async () => {
        try {
            const response = await axios.get(`https://collab-api-lbtk.onrender.com/group/download-groups/${title}`, {
                responseType: 'blob', // Important to indicate that the response is a blob
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title}.xlsx`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            toast.error(getError(err));
        }
    };

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
                    <button onClick={clickHandler} className='loginButton text-sm text-white'>Download</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;
