import React from 'react';

const SelectedHouseList = () => {
    return (

        <div class=" pl-4  bg-white container-fluid pt-4 rounded-lg tableStyle ">
            <table class="table   table-borderless   pt-5 rounded-lg">
                <thead class="bg-light  " >
                    <tr class="d-flex justify-content-between px-5 text-secondary">
                        <th scope="col ">House name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr class="d-flex justify-content-between px-3 ">

                        <td>Washington Avenue</td>
                        <td>$194</td>
                        <td><button className="btn buttonDesign ">View Details</button></td>
                    </tr>
                    <tr class="d-flex justify-content-between px-3 m-0">

                        <td>Washington Avenue</td>
                        <td>$194</td>
                        <td><button className="btn buttonDesign ">View Details</button></td>
                    </tr>
                    <tr class="d-flex justify-content-between px-3 m-0">
                        <td>Washington Avenue</td>
                        <td>$194</td>
                        <td><button className="btn buttonDesign ">View Details</button></td>
                    </tr>
                    <tr class="d-flex justify-content-between px-3 m-0">
                        <td>Washington Avenue</td>
                        <td>$194</td>
                        <td><button className="btn buttonDesign ">View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default SelectedHouseList;