import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="header-bg text-white">
            <div className=" text-end pt-5 pb-3 px-4 ms-auto mt-lg-5">
                <p className='pt-5 pe-5 mt-lg-5 fw-bold display-4'>Get royalty free music <br />
                    and SFX for your videos</p>

                <p className='fw-bold fs-3 px-5 mb-5'>
                    Start creating amazing videos with unlimited music & SFX</p>
                <div className='flex-row flex-sm-column'>
                    {/* <button type="button" className="btn btn-outline-info border-2 rounded-3 px-5 py-3 mx-5"> */}
                    <HashLink className="link  fw-bold fs-2 text-white"
                        to="/home#price"><button type="button" className="btn btn-outline-info text-white fw-bold border-2 rounded-3 fs-2 px-3 py-1 mx-5">Pricing</button></HashLink>

                    <button type="button" className="btn btn-outline-info border-2 rounded-3 px-3 py-1 mx-5">
                        <Link className="link  fw-bold fs-2 text-white h-link" to="/login">Start Free Trial</Link>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Header;