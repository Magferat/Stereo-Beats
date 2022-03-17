import React from 'react';
import AboutUs from './AboutUs';
import AllSongss from './AllSongs/AllSongss';
import Footer from './Footer';
import AllGenres from './Genres/AllGenres';
import Header from './Header';
import Nav from './Nav';
import PricingHome from './Pricing/PricingHome';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header />
            <AllGenres />
            <AllSongss />
            <AboutUs />
            <PricingHome />
            <Footer />
        </div>
    );
};

export default Home;