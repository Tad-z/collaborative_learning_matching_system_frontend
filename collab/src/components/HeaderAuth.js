import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../helpers/api';

const HeaderAuth = ({ title }) => {
    const clickHandler = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/group/download-groups/${title}`, {
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
            <div className="navbar">
                <div>
                    <Link to="/" className='text-2xl font-bold'>CollabLearn</Link>
                </div>
                <div>
                    <button onClick={clickHandler} className='loginButton text-sm text-white'>Download</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;
