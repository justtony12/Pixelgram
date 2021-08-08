import React from 'react';
import SignedIn from './SignedInLinks';
import SignedOut from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div>
                <SignedIn />
                {/* <SignedOut /> */}
            </div>
        </nav>
    )
}

export default Navbar;