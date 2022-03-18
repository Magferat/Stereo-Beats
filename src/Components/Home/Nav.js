import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import icon_m from '../../str/icon.png'
const Nav = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bg py-0 nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-sliders-h"></i></span>
                    </button>

                    <Link className="navbar-brand text-white fw-bold fs-3 ps-2 py-0" to="/home">
                        <img src={icon_m} class="icon_m img-fluid" alt="..." />
                        Stereo Beats </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item ">
                                <HashLink className="nav-link link active" aria-current="page" to="/home">Home</HashLink>
                            </li>
                            <li className="nav-item list m-2">
                                <HashLink to="/home#price" className="link-style">Pricing</HashLink>
                            </li >
                            <li className="nav-item list m-2">
                                <Link to='/login' className='link-style'>Login</Link>
                            </li>
                            <li className="nav-item list m-2">
                                <Link to='/signin' className='link-style'>Signin</Link>
                            </li>
                            {/* {
                                !(user?.email) && <li className="nav-item list m-2 ">
                                    <Link to='/login' className="link-style">Login</Link>
                                </li>
                            }

                            {
                                !(user?.email) && <li className="nav-item list m-2 ">
                                    <Link to='/register' className="link-style">Register</Link>
                                </li>
                            }
                            {
                                user?.email &&
                                <li className="list m-2 text-warning fw-bold">
                                    Hello, <br />
                                    {user?.displayName} !

                                </li>
                            }
                            {
                                user?.email &&
                                <button className="btn nav-bg text-white fw-bold list m-2"
                                    onClick={logOut}> log out
                                </button>


                            } */}
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Nav;