import React, { useContext } from 'react';
import plusIcon from '../../logos/plus 1.png';
import myRentIcon from '../../logos/Group 33351.png';
import bookingIcon from '../../logos/Group 1343.png'
import { Link } from 'react-router-dom';
import SelectedHouseList from '../SelectedHouseList/SelectedHouseList';
import logo from '../../logos/Logo.png'
import { userContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser)
    return (
        <section>
            <div class="container-fluid pb-3">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/home">
                        <img class="logo" src={logo} alt="" />
                    </a>
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <h5 class="nav-link text-dark font-weight-bold " >My Rent</h5>
                        </li>
                    </ul>
                    <ul class="ml-auto" style={{ listStyleType: "none" }}>
                        <li class="nav-item  ">
                            <div class="d-flex">
                                <img src={loggedInUser.photoURL} class="w-25 rounded-circle" alt="" />
                                <h6 class="text-dark font-weight-bold pt-3 pl-2">{loggedInUser.displayName}</h6>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row container-fluid ml-1   ">
                <div className="col-md-2  pt-4 ">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='bookingList'><p> <img className="dashboardIcon" src={bookingIcon} alt="" /> Booking List</p></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/addRentHouse"><p>  <img className="dashboardIcon" src={plusIcon} alt="" /> Add Rent House</p></Link>
                    <p class="textColor font-weight-bold"> <img className="dashboardIcon " src={myRentIcon} alt="" /> My Rent</p>
                </div>
                <div className="col-md-10 bg-light pt-3 tableStyle">
                    <SelectedHouseList />
                </div>
            </div>
        </section>
    );
};

export default Sidebar;