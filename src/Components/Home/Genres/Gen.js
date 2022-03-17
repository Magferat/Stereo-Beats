import React from 'react';

const Gen = (props) => {

    const { img, name, total } = props.gen;
    return (
        <>
            <div className="container mx-auto" style={{ width: "160px" }}>
                <div class="card p-0 border-0" style={{ width: "150px" }}>
                    <img src={img} class="card-img-top img-fluid " alt="..." />
                    {/* <h6>{name}</h6> */}
                    {/* <div class="card-body">
                    <h6>{name}</h6>
                </div> */}
                </div>
                <p className='text-white text-price text-start'>{name}</p></div>

        </>
    );
};

export default Gen;