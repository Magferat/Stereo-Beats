import React from 'react';
import AboutUs from './AboutUs';
import Header from './Header';
import Nav from './Nav';
import PricingHome from './Pricing/PricingHome';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header />
            <AboutUs />
            <PricingHome />
        </div>
    );
};

export default Home;