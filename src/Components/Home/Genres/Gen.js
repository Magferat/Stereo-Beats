import React from 'react';

const Gen = (props) => {

    const { img, name } = props.gen;
    return (
        <>
            <div className="container mx-auto" style={{ width: "200px" }}>
                <div className="card p-0 border-0" style={{ width: "190px" }}>
                    <img src={img} className="card-img-top img-fluid " alt="..." />

                </div>
                <p className='text-white text-price text-start'>{name}</p></div>

        </>
    );
};

export default Gen;