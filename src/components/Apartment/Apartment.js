import React from 'react';
import { useParams } from 'react-router-dom';
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails';
import fakeData from '../FakeData/FakeData'

const Apartment = () => {
    const { id } = useParams();
    const apartmentId = fakeData.filter(houseInfo => houseInfo.id == id);

    return (
        <section >
            <h1 className="text-center apartment-bg text-white"><strong>Apartment</strong>  </h1>
            <div className="container pt-5">
                {
                    apartmentId.map(houseInfo => <ApartmentDetails details={houseInfo} />)
                }
            </div>
        </section>
    );
};

export default Apartment;