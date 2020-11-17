import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);;

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setLoggedInUser(res.user);
                history.replace(from);

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    return (
        <section>
            <form className="col-md-4 mx-auto border rounded pt-4 pb-3">
                <h4 className="pb-4 ml-3 font-weight-bold">Login</h4>
                <div class="form-group">
                    <input type="email" class="form-control border-left-0 border-right-0 border-top-0 rounded-0 " placeholder="Username or Email" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control border-left-0 border-right-0 border-top-0 rounded-0" placeholder="Password" />
                </div>
                <div className="d-flex justify-content-between pb-3">
                    <div>
                        <input type="checkbox" name="rememberMe" class="m-1" />
                        <label htmlFor="RememberMe"> Remember Me</label>
                    </div>
                    <Link to='/'><p >Forgot Password</p></Link>
                </div>
                <button type="submit" class="btn buttonDesign btn-block rounded-0">Login</button>
                <p class="text-center pt-2"><small>Don't have an account? <Link to='/createAnAccount'> Create an account</Link></small></p>
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
            <div className="col-md-4  mx-auto">
                <button className="btn btn-outline-secondary mx-auto btn-block rounded-pill facebookIcon text-dark font-weight-bold">Continue with Facebook</button>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary mx-auto btn-block rounded-pill googleIcon text-dark font-weight-bold">Continue with Google</button>
            </div>

        </section>
    );
};

export default Login;