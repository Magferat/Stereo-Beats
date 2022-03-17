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
        <div id="" className=" container my-5 p-3" >
            <div className=" mx-auto row row-cols-lg-3 row-cols-sm-2 row-cols-md-2">
                {
                    types.map(type => <ShowTypes
                        id={type.id}
                        type={type}></ShowTypes>
                    )
                }
            </div>
        </div>
    );
};

export default AllTypes;