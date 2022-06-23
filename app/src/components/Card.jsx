import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img style={{borderRadius:"20px",width:"100%"}} src={props.image} />
            <h2 style={{margin:"25px"}}>{props.name}</h2>
            <h3 style={{margin:"25px",color: "#7D7987"}}>{props.task}</h3>
            <a style={{color:"#4089ED",fontSize:"20px",marginLeft:"24px"}} href='#'>{props.more}</a>

        </div>
    );
};

export default Card;