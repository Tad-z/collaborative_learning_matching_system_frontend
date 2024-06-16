import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ApiCall, { getError } from '../helpers/api';
import { toast } from 'react-toastify';

const HeaderAuth = ({ title }) => {
    const clickHandler = async () => {
        try {
            const response = await ApiCall.getMethod(`http://localhost:8000/group/download-groups/${title}`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title}_groups.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
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
