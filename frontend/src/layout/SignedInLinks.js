import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul>
            <li><NavLink to='/' />Home</li>
            <li><NavLink to='/' />Log Out</li>
            <li><NavLink to='/' />ML</li>
        </ul>
    )
}

export default SignedInLinks;