import React from 'react';
import { Link } from 'react-router-dom';

const CreateAnAccount = () => {
    return (
        <section>
            <form className="col-md-4 mx-auto border rounded pt-4 pb-3">
                <h4 className="pb-4 ml-3 font-weight-bold">Create an account</h4>
                <div class="form-group">
                    <input type="text" class="form-control border-left-0 border-right-0 border-top-0 rounded-0 " placeholder="First Name" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control border-left-0 border-right-0 border-top-0 rounded-0 " placeholder="Last Name" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control border-left-0 border-right-0 border-top-0 rounded-0 " placeholder="Username or Email" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control border-left-0 border-right-0 border-top-0 rounded-0" placeholder="Password" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control border-left-0 border-right-0 border-top-0 rounded-0" placeholder="Confirm Password" />
                </div>
                <button type="submit" class="btn buttonDesign btn-block rounded-0">Create an account</button>
                <p class="text-center pt-2"><small>Already have an account? <Link to='/login'> Login</Link></small></p>
            </form>
            <div class="d-flex justify-content-center ">
                <div class="col-md-2 m-0">
                    <hr />
                </div>
                <div class="text-center m-0">
                    <p>or</p>
                </div>
                <div class="col-md-2 m-0">
                    <hr />
                </div>
            </div>
            <div className="col-md-4  mx-auto pb-5">
                <button className="btn btn-outline-secondary mx-auto btn-block rounded-pill facebookIcon text-dark font-weight-bold">Continue with Facebook</button>
                <button className="btn btn-outline-secondary mx-auto btn-block rounded-pill googleIcon text-dark font-weight-bold">Continue with Google</button>
            </div>
        </section>
    );
};

export default CreateAnAccount;