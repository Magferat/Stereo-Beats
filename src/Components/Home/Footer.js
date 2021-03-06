import React from 'react';
import icon_f from '../../str/r-icon.png'
const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className="container text-white mt-5">
                <p className=' f-text text-end fw-bold fst-italic pt-5'>© 2022 <span className='text-info'>Stereo Beats </span>All Rights Reserved</p>
            </div>
            <div className=''> <hr className='text-white' /> </div>
            <div className="container d-flex">
                <div className="container mt-5">
                    <ul>

                        <li><i className="fas fa-check" />Music</li>
                        <li><i className="fas fa-check" />Sound Effects</li>
                        <li><i className="fas fa-check" />For Artists</li>
                        <li><i className="fas fa-check" />In-Store Music</li>
                        <li><i className="fas fa-check" />Blog</li>
                        <li><i className="fas fa-check" />Help</li>
                    </ul>
                </div>
                <div className="container mt-5">
                    <ul>
                        <li><i className="fas fa-check" />Pricing</li>
                        <li><i className="fas fa-check" />Enterprice</li>
                        <li><i className="fas fa-check" />Press</li>
                        <li><i className="fas fa-check" />Careers</li>
                        <li><i className="fas fa-check" />Community</li>
                        <li><i className="fas fa-check" />Spotify</li>
                    </ul>
                </div>
                <div className="container mt-5">
                    <ul>
                        <li><i className="fas fa-check" />Podcasts</li>
                        <li><i className="fas fa-check" />YouTube</li>
                        <li><i className="fas fa-check" />Instagram</li>
                        <li><i className="fas fa-check" />Facebook</li>
                        <li><i className="fas fa-check" />Twitter</li>
                        <li><i className="fas fa-check" />TickTok</li>
                    </ul>
                </div>

            </div>



        </div>
    );
};

export default Footer;