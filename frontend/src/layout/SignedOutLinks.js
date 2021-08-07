import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul>
            <li><NavLink to='/' />Sign Up</li>
            <li><NavLink to='/' />Login</li>
        </ul>
    )
}

export default SignedOutLinks;