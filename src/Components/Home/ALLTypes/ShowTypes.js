import React from 'react';

const ShowTypes = (props) => {


    const { name, img } = props.type;
    console.log(name, img)
    return (
        <div className="mx-auto" style={{ width: "200px" }}>
            <div class="card p-0 border-0" style={{ width: "190px" }}>
                <img src={img} class="card-img-top img-fluid " alt="..." />

            </div>
            <p className='text-info type text-start'>{name}</p></div>
    );
};

export default ShowTypes; 