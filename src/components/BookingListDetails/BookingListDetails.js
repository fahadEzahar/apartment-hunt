import React from 'react';

const BookingListDetails = () => {
    return (
        <div class=" pl-4  bg-white container-fluid pt-4 rounded-lg tableStyle ">
            <table class="table   table-borderless   pt-5 rounded-lg">
                <thead class="bg-light  " >
                    <tr>
                        <div className="row text-secondary">
                            <div className="col-md-2  text-center "><th scope="col ">Name</th></div>
                            <div className="col-md-2  text-center"><th scope="col">Email Id</th></div>
                            <div className="col-md-3  text-center"><th scope="col">Phone No</th></div>
                            <div className="col-md-3  text-center"><th scope="col">Massage</th></div>
                            <div className="col-md-2  text-center"><th scope="col">Status</th></div>
                        </div>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <div className="row">
                            <div className="col-md-2  text-center"><td>Fahad</td></div>
                            <div className="col-md-2  text-center"><td>fahad@gmail.com</td></div>
                            <div className="col-md-3  text-center"><td>+88 018123456789</td></div>
                            <div className="col-md-3  text-justify"><td>Lorem ipsum dolor sit,
                            amet consectetur elit.</td></div>
                            <div className="col-md-2  text-center">
                                <td>
                                    <select class="border-0">
                                        <option > Pending </option>
                                        <option >Done</option>
                                        <option >On going</option>
                                    </select>
                                </td>
                            </div>
                            <div className="col-md-2  text-center"><td>Fahad</td></div>
                            <div className="col-md-2  text-center"><td>fahad@gmail.com</td></div>
                            <div className="col-md-3  text-center"><td>+88 018123456789</td></div>
                            <div className="col-md-3  text-justify"><td>Lorem ipsum dolor sit,
                            amet consectetur elit.</td></div>
                            <div className="col-md-2  text-center">
                                <td>
                                    <select class="border-0">
                                        <option > Pending </option>
                                        <option >Done</option>
                                        <option >On going</option>
                                    </select>
                                </td>
                            </div>
                            <div className="col-md-2  text-center"><td>Fahad</td></div>
                            <div className="col-md-2  text-center"><td>fahad@gmail.com</td></div>
                            <div className="col-md-3  text-center"><td>+88 018123456789</td></div>
                            <div className="col-md-3  text-justify"><td>Lorem ipsum dolor sit,
                            amet consectetur elit. </td></div>
                            <div className="col-md-2  text-center">
                                <td>
                                    <select class="border-0">
                                        <option > Pending </option>
                                        <option >Done</option>
                                        <option >On going</option>
                                    </select>
                                </td>
                            </div>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default BookingListDetails;