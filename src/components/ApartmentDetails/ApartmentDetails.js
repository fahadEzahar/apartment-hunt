import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ApartmentDetails = (props) => {
    const { img, title, rent, descriptions, priceDetails, propertyDetails, roomSnapp1, roomSnapp2, roomSnapp3, roomSnapp4 } = props.details;

    const history = useHistory();

    const handleSubmit = (e) => {
        history.push('/dashboard');
        e.preventDefault();
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-8  ">
                    <div className="text-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="row  pt-4">
                        <div className="col-md-3 "> <img class="d-block w-100 img-fluid  " src={roomSnapp1} alt="" /> </div>
                        <div className="col-md-3 "> <img class="d-block w-100 img-fluid  " src={roomSnapp2} alt="" /> </div>
                        <div className="col-md-3 "> <img class="d-block w-100 img-fluid  " src={roomSnapp3} alt="" /> </div>
                        <div className="col-md-3 "> <img class="d-block w-100 img-fluid  " src={roomSnapp4} alt="" /> </div>
                    </div>
                    <div className="row mt-5 ">
                        <h1 className="col-md-7 textColor">{title}</h1>
                        <h1 className="col-md-5  text-center textColor"><strong>${rent}</strong></h1>
                        <p className="m-3 pb-4">{descriptions}</p>
                        <h5 className="m-3 font-weight-bold">Price Details - </h5>
                        <p className="m-3 pb-4">{priceDetails}</p>
                        <h5 className="m-3 font-weight-bold">Property Details - </h5>
                        <p className="m-3 pb-4">{propertyDetails}</p>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <form onSubmit={handleSubmit} className="bg-light p-4">
                        <div class="form-group ">
                            <input type="text" class="form-control" placeholder="Full Name" required />
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Phone No." required />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email address" required />
                        </div>
                        <div class="form-group">
                            <textarea rows="4" type="text" class="form-control" placeholder="Massage" required />
                        </div>
                        <button type="submit" class="btn buttonDesign btn-block rounded-0">Request Booking</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ApartmentDetails;