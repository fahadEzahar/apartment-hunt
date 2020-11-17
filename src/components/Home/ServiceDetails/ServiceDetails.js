import React from 'react';

const ServiceDetails = (props) => {
    const { icon, title, details } = props.service;
    return (
        <div class="col-md-4 pb-5  ">
            <div class="card border-0 bg-light ">
                <div class="mx-auto">
                    <img src={icon} class="card-img-top serviceIcon " alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center"><strong class="textColor">{title}</strong></h5>
                    <p class="text-center text-muted">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;