import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchHouseRent from './SearchHouseRent/SearchHouseRent';

const Header = () => {
    return (
        <div>
            <Navbar />
            <SearchHouseRent />
        </div>
    );
};

export default Header;