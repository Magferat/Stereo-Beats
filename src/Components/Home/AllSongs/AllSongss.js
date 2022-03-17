import React from 'react';
import blue from '../../../str/blue_bird_naruto.mp3'
const AllSongss = () => {
    return (
        <div>
            <audio
                controls
                src={blue} />
        </div>
    );
};

export default AllSongss;