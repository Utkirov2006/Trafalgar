import React from 'react';

const List = (props) => {
    return (
        <div className='list'>
            <h1>Download our  <br />mobile apps</h1>

            <ol>Our dedicated patient <br /> engagement app and
                web portal allow you to access <br /> information instantaneously (no tedeous form, long <br /> calls,
                or administrative hassle) and securely</ol>

            <button className='btn4'>Download</button>
            <img style={{position:"relative",left:"31rem"}} src={props.rasm3} />
            
        </div>
    );
};

export default List;