import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='container d-lg-flex'>

            <div className="container mt-5 px-lg-4">
                <div className='ms-lg-5'>
                    <h4 className='text-start text-white pt-4'>Try for free</h4>
                    <p className='text-start text-secondary text-about ps-3'>
                        Explore our music and try it out for 30 days – free of charge, no strings attached. During your free trial you can download and publish as many tracks you like in both videos or podcasts.
                    </p>
                    <Link className="fw-bold link2" to="/explore"> <h6> Start Free Trial <i class="fas fa-arrow-right"></i></h6></Link>


                </div>
                <div className='ms-lg-5'>
                    <h4 className='text-start text-white pt-3'>Pick a subscription</h4>
                    <p className='text-start text-secondary text-about ps-3'>
                        A subscription is most beneficial if you publish videos regularly. All subscriptions give you full access to 35,000 tracks and 90,000 sound effects. Unlimited downloads and use.
                    </p>
                    <Link className="fw-bold link2" to="/explore">Pricing <i class="fas fa-arrow-right"></i></Link>

                </div>
                <div className='ms-lg-5'>
                    <h4 className='text-start text-white pt-3 pb-2'>Connect your channels</h4>
                    <p className='text-start text-about text-secondary ps-3'>
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