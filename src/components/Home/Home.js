import React from 'react';
import ContactDetails from './ContactDetails/ContactDetails';
import Header from './Header/Header';
import HouseRent from './HouseRent/HouseRent';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <HouseRent/>
            <Services/>
            <ContactDetails/>
        </div>
    );
};

export default Home;