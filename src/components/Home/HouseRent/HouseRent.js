import React from 'react';
import fakeData from '../../FakeData/FakeData'
import HouseRentDetails from '../HouseRentDetails/HouseRentDetails';

const HouseRent = () => {

    return (
        <section class="pt-3 text-center bg-light" id='event'>
            <p><strong className="textColor">House Rent</strong></p>
            <h3><strong className="textColor">Discover the latest Rent <br /> available today</strong></h3>
            <div className="row container pt-5 mx-auto">
                {
                    fakeData.map(houseInfo => <HouseRentDetails houseInfo={houseInfo} />)
                }
            </div>
        </section>
    );
};

export default HouseRent;