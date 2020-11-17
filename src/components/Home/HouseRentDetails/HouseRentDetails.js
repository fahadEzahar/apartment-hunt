import React from 'react';
import locationIcon from '../../../logos/map-marker-alt-solid 1.png'
import bedIcon from '../../../logos/bed 1.png'
import bathIcon from '../../../logos/bath 1.png'
import { Link } from 'react-router-dom';

const HouseRentDetails = (props) => {
    const { id, title, img, rent, location } = props.houseInfo;
    return (
        <div class="col-md-4 pb-5 ">
            <div class="card border-0 shadow-lg">
                <img src={img} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-justify"><strong class="textColor">{title}</strong></h5>
                    <div className="d-flex">
                        <img class="locationIconStyle m-1 " src={locationIcon} alt="" />
                        <p class="card-text text-muted "> {location}</p>
                    </div>
                    <div className=" row">
                        <div className="col-md-6  d-flex "><img class="bathAndBedIcon m-1" src={bedIcon} alt="" /><p class="card-text text-muted ">3 Bedrooms</p></div>
                        <div className=" col-md-6  d-flex "><img class="bathAndBedIcon m-1" src={bathIcon} alt="" /><p class="card-text text-muted ">2 Bathroom</p></div>
                    </div>
                </div>
                <div class="card-footer  d-flex text-justify border-0 bg-white ">
                    <div className="col-md-6">
                        <h2 class="textColor"><strong>${rent}</strong></h2>
                    </div>
                    <div className="col-md-6">
                        <Link to={"/apartment/" + id} ><button className="btn buttonDesign mt-1">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentDetails;