import React from 'react';
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div>
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </div>
        </nav>
    )
}

export default Navbar;