import React from 'react';
import fbIcon from '../../../logos/Vector.png';
import instagramIcon from '../../../logos/Vector-1.png';
import linkedinIcon from '../../../logos/Vector-2.png';
import youtubeIcon from '../../../logos/Vector-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ContactDetails = () => {
    return (
        <section className=" contact-bg pb-5 " id='about'>
            <div className="container">
                <div className="row  text-white ">
                    <div className="col-md-4  p-5 d-flex">
                        <FontAwesomeIcon className="m-2" icon={faMapMarkerAlt} />
                        <p className="">H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com</p>
                    </div>
                    <div className="col-md-2  p-3 pt-5 py-3">
                        <h5 className="">Company</h5>
                        <ul style={{ listStyleType: "none" }} className=" p-0 ">
                            <li className="py-2">About</li>
                            <li className="py-2">Site Map</li>
                            <li className="py-2">Support Center</li>
                            <li className="py-2">Terms Condition</li>
                            <li className="py-2">Submit Listing</li>
                        </ul>
                    </div>
                    <div className="col-md-2  p-3 pt-5 py-3">
                        <h5 className="">Quick Links</h5>
                        <ul style={{ listStyleType: "none" }} className=" p-0 ">
                            <li className="py-2">Quick Links</li>
                            <li className="py-2">Rentals</li>
                            <li className="py-2">Sales</li>
                            <li className="py-2">Contact</li>
                            <li className="py-2">Terms Conditions</li>
                            <li className="py-2">Our Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-4  p-5">
                        <h5>About Us</h5>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <div className="row pt-4">
                            <div className="col-md-2  "><img className="socialMediaIcon" src={fbIcon} alt="" /></div>
                            <div className="col-md-2  "> <img className="socialMediaIcon" src={instagramIcon} alt="" /></div>
                            <div className="col-md-2  "><img className="socialMediaIcon" src={linkedinIcon} alt="" /></div>
                            <div className="col-md-2  "><img className="socialMediaIcon" src={youtubeIcon} alt="" /></div>
                        </div>
                        <div className='socialMediaIcon d-flex'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;