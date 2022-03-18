import React from 'react';

const ShowTypes = (props) => {


    const { name, img } = props.type;
    // console.log(name, img)
    return (
        <div className="me-3 mt-5" style={{ width: "200px" }}>
            <div className="card col p-0 border-0" style={{ width: "190px" }}>
                <img src={img} className="card-img-top img-fluid " alt="..." />

            </div>
            <p className='text-info type text-start'>{name}</p></div>
    );
};

export default ShowTypes; 