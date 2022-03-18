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
                        <label for="inputEmail3" className="col-sm-3 col-form-label mt-lg-5 fw-bold fs-2 ">Your Name:</label>
                        <div className="col-sm-8 mb-5 mt-lg-5">
                            <input type="text" className="form-control border-0 border-bottom border-2 border-warning fs-3"
                                placeholder='kimi no na wa'
                            />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="inputEmail3" className="col-sm-2 col-form-label me-2 mt-lg-5 fw-bold fs-2 ">Email:</label>
                        <div className="col-sm-8 mb-5 mt-lg-5">
                            <input type="email" className="form-control border-0 border-bottom border-2 border-warning fs-3 ms-3"
                                placeholder='your@email.com'
                                id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label me-2 fw-bold fs-2 mt-lg-5">Password:</label>
                        <div className="col-sm-8 mb-5">
                            <input type="email" className="form-control border-0 border-bottom border-2 border-warning fs-3 ms-3 mt-lg-5"
                                placeholder='*********' id="inputPassword3" />
                        </div>
                    </div>
                    <p className='text-start text-price5'>Already have an account? <HashLink to='/login' >Click Here! </HashLink></p>
                    <button type="submit" className="btn btn-warning fw-bold fs-3 px-5 mt-3 py-2 me-5">Create Account <i className="fas fa-sign-in-alt"></i></button>
                </form>

            </div>
        </div>
    );
};

export default SignIn;