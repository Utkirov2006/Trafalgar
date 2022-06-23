import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer'>

            <div className="footer-wrapper">
                <img src={props.rasm} />
                <ol>Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br /> for everyone</ol>
                <span>©Trafalgar PTY LTD 2020. All rights reserved</span>

            </div>
            <div className="footer-fluid">

                <ul>
                    <h2>Company</h2>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>



                <ul>
                    <h2>Region</h2>
                    <li>Indonesia</li>
                    <li>Singapore</li>
                    <li>Hongkong</li>
                    <li>Canada</li>
                </ul>

                <ul>
                    <h2>Help</h2>
                    <li>Help center</li>
                    <li>Contact support</li>
                    <li>Instructions</li>
                    <li>How it works</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;