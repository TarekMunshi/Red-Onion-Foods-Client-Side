import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>Best Food Waiting For Your Belly.</h1>
                {/* <form className="example" style={{ margin: "auto", maxWidth: "500px" }}>
                    <input type="text" placeholder="Search Food Items" name="search2" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form> */}
                <div className='banner-btn'>
                    <button>Order Now</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;