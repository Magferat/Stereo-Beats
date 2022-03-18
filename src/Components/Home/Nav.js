import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import icon_m from '../../str/icon.png'
const Nav = () => {
    const { user, logOut } = useAuth();


    return (

        <div>
            <nav className="navbar navbar-expand-lg nav-bg fixed-top  py-0 nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-sliders-h"></i></span>
                    </button>

                    <Link className="navbar-brand text-white fw-bold fs-3 ps-2 py-0" to="/home">
                        <img src={icon_m} className="icon_m img-fluid" alt="..." />
                        Stereo Beats </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <HashLink className="nav-link link active me-3" aria-current="page" to="/home">Home</HashLink>
                            </li>
                            <li className="nav-item list m-1">
                                <HashLink to="/home#price" className="link-style link me-3">
                                    Pricing
                                </HashLink>
                            </li >
                            {
                                !(user?.email) && <li className="nav-item  list m-1">
                                    <Link to='/login' className='link-style link me-3'>Login</Link>
                                </li>
                            }

                            {/* <li className="nav-item list m-2 link">
                                <Link to='/signin' className='link-style'>Signin</Link>
                            </li> */}
                            {
                                user?.email && <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="btn link fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1"

                                            data-bs-toggle="dropdown"

                                            aria-expanded="false">
                                            {user?.displayName}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li> <button
                                                className="btn btn-light fw-bold"
                                                onClick={logOut}>Log Out</button> </li>

                                        </ul>
                                    </div>
                                </li>
                            }

                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Nav;