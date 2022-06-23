import React from 'react';

const MainContent = (props) => {
    return (
        <div className='main-content'>
            <img style={{ position: "absolute", left: "4rem"}} src={props.rasm2} />
            <h2>Leading healthcare <br /> providers</h2>
            <ol>Trafalgar provides progressive, and affor<br />dable  healthcare, accessible on mobile and<br /> online for  everyone. To us, it’s not just work.<br /> We take pride
                in the solutions we deliver</ol>
            <button className='btn3'>Learn more</button>
        </div>
    );
};

export default MainContent;