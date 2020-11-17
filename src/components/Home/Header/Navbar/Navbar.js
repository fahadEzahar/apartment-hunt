import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../logos/Logo.png'

const Navbar = () => {
    return (
        <div class="container pb-3">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/home">
                    <img class="logo" src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active m-2">
                            <a class="nav-link text-dark font-weight-bold" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item m-2 ">
                            <a class="nav-link text-dark font-weight-bold " href="#about">About</a>
                        </li>
                        <li class="nav-item m-2">
                            <a class="nav-link text-dark font-weight-bold" href="#service">Service</a>
                        </li>
                        <li class="nav-item m-2">
                            <a class="nav-link text-dark font-weight-bold" href="#about">Concerns</a>
                        </li>
                        <li class="nav-item m-2">
                            <a class="nav-link text-dark font-weight-bold" href="#event">Event</a>
                        </li>
                        <li class="nav-item m-2">
                            <a class="nav-link text-dark font-weight-bold" href="#about">Contact</a>
                        </li>
                        <Link to='/dashboard'>
                            <div className="btn buttonDesign m-2 px-4">
                                Login
                        </div>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;