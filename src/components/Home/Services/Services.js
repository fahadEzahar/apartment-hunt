import React from 'react';
import apartmentIcon from '../../../logos/apartment 1.png';
import affordable from '../../../logos/affordable 1.png';
import lessee from '../../../logos/lessee 1.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            icon: apartmentIcon,
            title: "Wide Range of Properties",
            details: "With a robust selection of popular properties on hand, as well as leading properties from experts."
        },
        {
            icon: affordable,
            title: "Financing Made Easy",
            details: "Our stress-free finance department that can find financial solutions to save you money."
        },
        {
            icon: lessee,
            title: "Trusted by Thousands",
            details: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users."
        },
    ]
    return (
        <section class="pt-3 text-center bg-light" id='service'>
            <p><strong className="textColor">Service</strong></p>
            <h3><strong className="textColor">We're an agency tailored to all <br /> clients' needs that always delivers</strong></h3>
            <div className="row container pt-5 mx-auto ">
                {
                    serviceData.map(service => <ServiceDetails service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;