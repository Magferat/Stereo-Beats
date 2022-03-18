import React from 'react';
import deal from "../../../str/deal.png"
const PricingHome = () => {
    return (
        <div id='price'>
            <h1 className='text-info mt-5 p-4'>
                The best license in the world
            </h1>
            <h4 className='text-white'>
                Unlimited music & SFX, unlimited downloads and a lifetime license
            </h4>
            <div className="container">
                <div className="row d-lg-flex justify-content-center">
                    <div className="card col-sm col-md-12 my-cards bg-dark mb-5 mt-5 me-5 shadow h-100" style={{ width: '350px' }}>
                        <div className="card-body">
                            <h1 className=" my-4 text-info">Personal</h1>
                            <p className="text-price text-white">Covers all your own social channels</p>
                            <p className="mt-3 mb-0 text-info">
                                <sup className='text-price2 '>US$</sup><span className='text-price3 fw-bold'>9</span><sup className='text-price2'>99</sup><sub className='text-price2'>/month</sub>
                            </p>
                            <p className='text-muted text-price py-4'>Billed annually or
                                $14.99 billed monthly </p>
                            <button type="button" className="btn btn-outline-info rounded-pill px-5 fs-3 py-2 mb-4">Select</button> <br />
                            <hr className='text-white' />
                            <ul className='price-list mt-5'>
                                <span className='text-start text-price text-info fw-bold'>
                                    License covers:
                                </span>
                                <li className='text-white mt-2'><i className="fas fa-check"></i>YouTube </li>

                                <li className='text-white'><i className="fas fa-check"></i>Facebook </li>

                                <li className='text-white'><i className="fas fa-check"></i>Instagram </li>

                                <li className='text-white'><i className="fas fa-check"></i>Podcasts </li>
                                <li className='text-white mb-4'><i className="fas fa-check"></i>TikTok </li>

                                <span className='text-white text-price'> <span className='text-info fs-3'>*</span>One channel per platform.</span>
                            </ul>
                        </div>
                    </div>
                    <div className="card col-sm col-md-12 my-cards my-card-sp bg-dark mb-5 mt-5 me-5 shadow h-100" style={{ width: '350px' }}>
                        <div className="card-body pt-1">
                            <button type="button" className=" btn-warning px-3 py-1 shadow-lg border border-warning text-price mb-1 fw-bold">BEST DEAL</button>
                            <h1 className=" my-4">Unlimited</h1>
                            <p className="text-price text-white">Covers everything from personal to commercial projects</p>
                            <p className="mt-3 mb-0">
                                <span className='text-price text-primary'>Starting at</span> <br />
                                <sup className='text-price5 '>US$</sup><span className='text-price4 fw-bold'>16</span><sup className='text-price5'>60</sup><sub className='text-price5'>/month</sub>
                            </p>
                            <p className='text-primary text-price py-4'>Billed annually</p>
                            <button type="button" className="btn btn-info rounded-pill px-5 fs-3 py-2 mb-4 text-white fw-bold">Select</button>

                            <hr className='text-white' /> <br />
                            <ul className='price-list'>
                                <span className='text-start text-price text-info fw-bold'>
                                    License covers:
                                </span>
                                <li className='text-white mt-2'><i className="fas fa-check"></i>Unlimited social platforms </li>

                                <li className='text-white'><i className="fas fa-check"></i>Bridcast & TV </li>
                                <li className='text-white'><i className="fas fa-check"></i>Paid ads </li>
                                <li className='text-white'><i className="fas fa-check"></i>Commercial work</li>

                                <li className='text-white'><i className="fas fa-check"></i>Websites & all online pltatforms </li>
                                <li className='text-white mb-5'><i className="fas fa-check"></i>Commercial work </li>

                            </ul>


                        </div>
                    </div>
                    <div className="card  col-sm col-md-12 my-cards bg-dark mb-5 mt-5 me-2 shadow h-100" style={{ width: '350px' }}>
                        <div className="card-body">
                            <h1 className=" mb-4 mt-4 text-info">Enterprise</h1>
                            <p className="text-price text-white pb-4">Tailored licensing & plans
                                for organizations</p>
                            <img src={deal} alt="" className='img-fluid w-50 color-white my-5' />

                            <button type="button" className="btn btn-outline-info rounded-pill px-4 fs-3 py-1 mb-4">Contact Sales</button>
                            <div><hr className='text-white'></hr> <br /></div>
                            <ul className='price-list'>
                                <span className='text-start text-price text-info fw-bold'>
                                    License covers:
                                </span>
                                <li className='text-white mt-2'><i className="fas fa-check"></i>Customized terms</li>

                                <li className='text-white'><i className="fas fa-check"></i>Customized licenses </li>

                                <li className='text-white'><i className="fas fa-check"></i>Dedicated curation services </li>
                                <li className='text-white'><i className="fas fa-check"></i>Secure Payment </li>
                                <li className='text-white mb-5'><i className="fas fa-check"></i>Premium customer success</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default PricingHome;