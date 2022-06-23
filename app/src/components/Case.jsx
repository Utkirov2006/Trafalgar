import React from 'react';

const Case = (props) => {
    return (
        <div className='urn'>
            <div className="case">
                <h1 style={{ textAlign: 'center', lineHeight: "100px" }}>What our customer are saying</h1>
                <img style={{ borderRadius: "50%", border: "2px solid white", margin: "44px 0px 0px 69px" }} src={props.rasm4} />
                <li>Edward Newgate  <br /><span>Founder br Circle</span></li>

                <ol>“Our dedicated patient engagement app and <br />
                    web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br />
                    or administrative hassle) and securely”</ol>
            </div>
        </div>
    );
};

export default Case;