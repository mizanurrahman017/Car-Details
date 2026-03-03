import React from 'react';
import HeroSection from '../../../Components/Navbar/HeroSection/HeroSection';
import PopularCars from '../../../Components/Navbar/PopularCars/PopularCars';
import BrowseBrands from '../../../Components/Navbar/BrowseBrands/BrowseBrands';
import LatestCars from '../../../Components/Navbar/LatestCars/LatestCars';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <PopularCars></PopularCars>
            <BrowseBrands></BrowseBrands>
            <LatestCars></LatestCars>
        </div>
    );
};

export default Home;