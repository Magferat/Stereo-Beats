import React from 'react';
import { HashLink } from 'react-router-hash-link';

const SignIn = () => {
    return (
        <div className='container-fluid bg-white d-lg-flex'>
            <div className="container me-auto">
                <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1647583918~exp=1647584518~hmac=f2e8c1e024ca55d2654d6d931f0df9e6bc00e99fc77adb41fb6aa550008939a7&w=826' alt="" className='img-fluid' />
            </div>
            <div className="container me-5">
                <form className='mt-5'>
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-3 col-form-label m-2 fw-bold">Your Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-0 border-bottom border-2 border-warning"
                                placeholder='kimi no na wa'
                            />
                        </div>
                    </div>
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
                    <h6 className='text-start text-price'>Don't have an account? <HashLink to='/signup' >Click Here! </HashLink></h6>
                    <button type="submit" className="btn btn-warning fw-bold me-5">SIGNUP</button>
                </form>

            </div>
        </div>
    );
};

export default SignIn;