import React from 'react';
import Card from './Card';

import image from "../img/image 2.png"

import image2 from "../img/image1.png"
import image3 from "../img/image 3.png"


const Wrapper = () => {
    return (
        <div className='wrapper'>
            <h1 style={{ textAlign: "center", marginTop: "35px", fontSize: "35px" }}>Check out our latest article</h1>

            <div className="wrapper-fluid">

                <Card image={image} name="Disease detection, check up in the laboratory" task="In this case, the role of the health laboratory is very important to doa disease detection..." more="Read more" />


                <Card image={image2} name="Disease detection, check up in the laboratory" task="In this case, the role of the health laboratory is very important to doa disease detection..." more="Read more" />


                <Card image={image3} name="Disease detection, check up in the laboratory" task="In this case, the role of the health laboratory is very important to doa disease detection..." more="Read more" />



            </div>
            <button className='btn5'>View all</button>
        </div>
    );
};

export default Wrapper;