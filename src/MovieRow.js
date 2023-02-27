import React from 'react';
import moviePoster from '../public/megan.jpg';

const MovieRow = ({ rowText }) => {
    return (
        <div className="movieRow">
            <h4>{rowText}</h4>
            <div className="images-container">
                <img src={moviePoster} />
                <img src={moviePoster} />
                <img src={moviePoster} />
                <img src={moviePoster} />
                <img src={moviePoster} />
                <img src={moviePoster} />
                <img src={moviePoster} />
            </div>
        </div >
    );
};

export default MovieRow;