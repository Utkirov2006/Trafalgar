import React from 'react';
import Box from './Box';


import img1 from "../img/lupa.svg"
import img2 from "../img/Group.svg"
import img3 from "../img/Frame (1).svg"
import img4 from "../img/Frame (2).svg"
import img5 from "../img/Frame (3).svg"
import img6 from "../img/Group.svg"


const Container = () => {
    return (
        <div className='container'>

            <h1>Our services</h1>
            <ol>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health</ol>

            <div className="boxs">

                <Box img1={img1} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />
                <Box img1={img2} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />
                <Box img1={img3} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />
                <Box img1={img4} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />
                <Box img1={img5} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />
                <Box img1={img6} name="Search doctor" task="Choose your doctor from thousands  of specialist, general, and trusted hospitals" />

            </div>
            <button className='btn2'>Learn more</button>



        </div>
    );
};

export default Container;