import React from 'react';
import Footer from '../../Shared/Header/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SlickSlider from '../../Shared/SlickSlider/SlickSlider';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MenuList from '../FoodItems/MenuList/MenuList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <MenuList></MenuList>
            <About></About>
            <Footer></Footer>
            <SlickSlider></SlickSlider>
        </div>
    );
};

export default Home;