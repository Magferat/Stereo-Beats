import React, { useEffect, useState } from 'react';
import ShowTypes from './ShowTypes';

const AllTypes = () => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, [])

    return (
        // <div className="container">
        <div className="ms-5 row row-cols-lg-3 row-cols-sm-2 row-cols-md-3">
            {
                types.map(type => <ShowTypes
                    key={type.id}
                    type={type}></ShowTypes>
                )
            }
        </div>
        // </div>

    );
};

export default AllTypes;