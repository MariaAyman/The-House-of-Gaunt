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
                {/* <div className='trailer'>
                    <div className='play-button'>
                        <a className="trailer-link" href="https://www.youtube.com/watch?v=ubRz72gCzKI" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>
                    <p>Watch Trailer</p>
                </div> */}
                <a className='trailer' href='https://www.youtube.com/watch?v=ubRz72gCzKI' target="_blank" rel="noopener noreferrer" role='button'>
                    <span className='play-button' aria-hidden='true'>
                        <i className='fa-solid fa-play play-icon'></i>
                    </span>
                    <span className='button-text'>Watch Trailer</span>
                </a>
            </div>
        </div>
    );
}

export default Bio;