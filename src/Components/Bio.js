import React from 'react';

function Bio() {
    return (
        <div className='bioCont'>
            <div className='rate fade-in'>
                <i className="fa-solid fa-star"></i>
                <p><span>7.0</span>/10</p>
                <p id='details'>34m . Fantasy, Fan Film, Short . 2021</p>
            </div>
            <div className='synopsis'>
                <p id='bio' className='fade-in'>
                    Following Tom Riddle as he goes down the path of Dark Magic and becomes the Dark Lord that is infamously known in the world of Harry Potter as Lord Voldemort.
                </p>
                <a className="watch-trailer" href='https://www.youtube.com/watch?v=ubRz72gCzKI' target="_blank" rel="noopener noreferrer" role='button'>
                    <span className="circle" aria-hidden="true">
                    <i className="fa-solid fa-play icon arrow"></i>
                    </span>
                    <span className="a-text">Watch Trailer</span>
                </a>
            </div>
        </div>
    );
}

export default Bio;