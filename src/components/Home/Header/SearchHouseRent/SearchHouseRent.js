import React from 'react';

const SearchHouseRent = () => {
    return (
        <div className="banner">
            <div class="text-center  pt-5 pb-5 ">
                <h1><strong class="text-white">FIND YOUR HOUSE RENT</strong></h1>
                <nav class="navbar navbar-light">
                    <form class="form-inline mx-auto  ">
                        <input class="form-control  mr-sm-2 px-5 " type="search" placeholder="Search ..." aria-label="Search" />
                        <button class="btn buttonDesign my-2 my-sm-0 px-4 pl-5" type="submit">Find Now</button>
                    </form>
                </nav>
            </div>
        </div>
    );
};
export default SearchHouseRent;