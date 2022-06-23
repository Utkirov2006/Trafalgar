import React from 'react';

const Main = (props) => {
    return (
        <div className='main'>

            <h1>Virtual healthcare <br /> for you</h1>
            <ol>Trafalgar provides progressive, and affordable <br />
                healthcare, accessible on mobile and online <br />
                for everyone</ol>
            <button className='btn1'>Consult today</button>
            <img src={props.rasm1} className="img"/>
        </div>
    );
};

export default Main;