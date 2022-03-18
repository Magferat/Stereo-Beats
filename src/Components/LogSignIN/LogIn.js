import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import login from '../../str/lohin.jpg'

const LogIn = () => {

    const { googleSignIn } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handlegoogle = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div className='container-fluid bg-white d-lg-flex'>
            <div className="container me-auto">
                <img src={login} alt="" className='img-fluid' />
            </div>
            <div className="container mt-lg-5 me-5">

                <button
                    onClick={handlegoogle}
                    type="button" className=" me-lg-5 btn btn-warning px-2 text-dark fw-bold"> Continue with Google <i className="fab fa-google-plus"></i> </button>

                <form className=''>
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label m-2 fw-bold">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control border-0 border-bottom border-2 border-warning"
                                placeholder='your@email.com'
                                id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label m-2 fw-bold">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-0 border-bottom border-2 border-warning"
                                placeholder='*********' id="inputPassword3" />
                        </div>
                    </div>
                    <h6 className='text-start text-price'>Don't have an account? <HashLink to='/signin' >Click Here! </HashLink></h6>
                    <button type="submit" className="btn btn-warning fw-bold me-5">LOGIN <i className="fas fa-sign-in-alt"></i></button>
                </form>




            </div>
        </div>
    );
};

export default LogIn;