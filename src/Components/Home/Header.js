import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="header-bg text-white">
            <div className=" text-end py-5 px-4 ms-auto">
                <h1 className='pt-5'>Get royalty free music <br />
                    and SFX for your videos</h1>
                {/* className="font-monospace" */}
                <p className='fw-bold'>
                    Start creating amazing videos with unlimited music & SFX</p>
                <div className='flex-row flex-sm-column'>

                    <button type="button" className="btn btn-outline-info mx-3">
                        <Link className="link fw-bold text-white" to="/login">Start Free Trial</Link>
                    </button>
                    <button type="button" className="btn btn-outline-info  my-3 mx-3">
                        <HashLink className="link fw-bold text-white" to="/home#price">Pricing</HashLink>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;