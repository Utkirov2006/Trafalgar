import React from 'react';

const Box = (props) => {
    return (
        <div className='box'>
            
            <img src={props.img1}/>
            <h2>{props.name}</h2>
            <ul>{props.task}</ul>
        </div>
    );
};

export default Box;