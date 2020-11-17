import React from 'react';
import plusIcon from '../../logos/plus 1.png';
import myRentIcon from '../../logos/Group 33351.png';
import bookingIcon from '../../logos/Group 1343.png'
import logo from '../../logos/Logo.png'
import AddRentHouse from '../AddRentHouse/AddRentHouse';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <section>
            <div class="container-fluid pb-3">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/home">
                        <img class="logo" src={logo} alt="" />
                    </a>
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <h5 class="nav-link text-dark font-weight-bold " >Add Rent House</h5>
                        </li>
                    </ul>
                    <ul class="ml-auto" style={{ listStyleType: "none" }}>
                        <li class="nav-item  ">
                            <h6 class="text-dark font-weight-bold">Admin</h6>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row container-fluid ml-1   ">
                <div className="col-md-2  pt-4 ">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="bookingList"><p> <img className="dashboardIcon" src={bookingIcon} alt="" /> Booking List</p></Link>
                    <p class="textColor font-weight-bold">  <img className="dashboardIcon" src={plusIcon} alt="" /> Add Rent House</p>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">   <p> <img className="dashboardIcon" src={myRentIcon} alt="" /> My Rent</p> </Link>
                </div>
                <div className="col-md-10 bg-light pt-3 tableStyle ">
                    <AddRentHouse />
                    <div class="pt-3 " style={{ marginLeft: '90%' }} >
                        <button className="mr-auto btn px-4 buttonDesign" >Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;