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

        <div className="container mx-auto row row-cols-lg-3 row-cols-sm-2 row-cols-md-2">
            {
                types.map(type => <ShowTypes
                    key={type.id}
                    type={type}></ShowTypes>
                )
            }
        </div>

    );
};

export default AllTypes;