import React from 'react';
import { HashLink } from 'react-router-hash-link';
import login from '../../str/lohin.jpg'

const LogIn = () => {
    return (
        <div className='container-fluid bg-white d-flex'>
            <div className="container me-auto">
                <img src={login} alt="" className='img-fluid' />
            </div>
            <div className="container mt-lg-5 me-5">
                <form className='mt-5'>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label m-2 fw-bold">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control border-0 border-bottom border-2 border-warning"
                                placeholder='your@email.com'
                                id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label m-2 fw-bold">Password:</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control border-0 border-bottom border-2 border-warning"
                                placeholder='*********' id="inputPassword3" />
                        </div>
                    </div>
                    <h6 className='text-start'>Don't have an account? <HashLink to='/signin' >Click Here! </HashLink></h6>
                    <button type="submit" class="btn btn-warning fw-bold me-5">LOGIN</button>
                </form>

            </div>
        </div>
    );
};

export default LogIn;