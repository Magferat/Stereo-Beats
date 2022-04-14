import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const AboutUs = () => {
    return (
        <div className='container d-lg-flex'>

            <div className="container mt-5 px-lg-4 me-lg-3">
                <div className='ms-lg-5 mt-lg-5'>
                    <h4 className='text-start text-white display-6 fw-bold mb-4'>Start free trial</h4>
                    <p className='text-start text-secondary text-about ps-5 '>
                        Explore our music and try it out for 30 days – free of charge, no strings attached. During your free trial you can download and publish as many tracks you like in both videos or podcasts.
                    </p>
                    <Link className="fw-bold link2" to="/login"> <h5> Start Free Trial <i className="fas fa-arrow-right"></i></h5></Link>


                </div>
                <div className='ms-lg-5'>
                    <h4 className='text-start text-white display-6 fw-bold mb-4'>Choose your plan</h4>
                    <p className='text-start text-secondary text-about ps-5 '>
                        A subscription is most beneficial if you publish videos regularly. All subscriptions give you full access to 20,000 tracks and 60,000 sound effects. Unlimited downloads and use.
                    </p>
                    <HashLink className="fw-bold link2" to="/home#price"> <h4> Pricing <i className="fas fa-arrow-right"></i></h4></HashLink>

                </div>
                <div className='ms-lg-5'>
                    <h4 className='text-start text-white display-6 fw-bold mb-4'>Connect your channels</h4>
                    <p className='text-start text-secondary text-about ps-5 '>
                        When signing up you’re asked to connect your social media channels and accounts. All connected channels will be cleared, meaning you can publish content with our music without having to worry about being claimed.
                    </p>
                </div>
            </div>
            <div className="container mt-5">
                <div className='about-bg'>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;