import React, { useState } from 'react';
import { useEffect } from 'react';
import Gen from './Gen';

const AllGenres = () => {


    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch('./genrws.JSON')
            .then(res => res.json())
            .then(data => setGenres(data))
    }, [])

    return (
        <div id="genres" className=" container my-5 p-3" >
            <div className="container w-75 "> <h4 className="text-center text-info mt-3 pb-3">Our Most Popular Genres</h4> </div>

            <div className=" mx-auto row row-cols-lg-5 row-cols-sm-2 row-cols-md-3">
                {
                    genres.map(gen => <Gen
                        key={gen.id}
                        gen={gen}></Gen>
                    )
                }
            </div>
        </div>
    );
};

export default AllGenres;