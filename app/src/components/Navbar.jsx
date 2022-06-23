import React from 'react';

const Navbar = (props) => {
    return (
        <div className='navbar'>

            <img style={{position:"relative",top:"2rem",left:"11rem"}} src={props.rasm} />
            <ul>
                <li style={{fontWeight:'bold',color:'black'}}>Home</li>
                <li>Find a doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About us</li>
            </ul>

        </div>
    );
};

export default Navbar;