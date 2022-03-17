import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import icon_m from '../../str/icon.png'
const Nav = () => {
    // const { user, logout } = useAuth({});

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
                            {/* <li className="nav-item">
                                <HashLink className="nav-link link active" aria-current="page" to="/home#about">About Us </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link link active" aria-current="page" to="/home#reviews">Reviews</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link link  active" aria-current="page" to="/dashboard">Dashboard</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link link active" aria-current="page" to="/explore">Explore</HashLink>
                            </li>
                            {
                                user.email &&
                                <li className="nav-item  ">
                                    <div className="dropdown">
                                        <button className="btn fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Hello,{user.displayName} !
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                            <li><div
                                                onClick={logout}
                                                className="btn btn-light">  Logout</div> </li>
                                        </ul> </div></li>
                            }
                            {
                                !user.email && <li className="nav-item">
                                    <HashLink className="nav-link link active" aria-current="page" to="/login">Login</HashLink>

                                </li>

                            }
                            {
                                !user.email && <li className="nav-item">
                                    <HashLink className="nav-link link active" aria-current="page" to="/register">Register</HashLink>

                                </li> */}

                            {/* } */}
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Nav;