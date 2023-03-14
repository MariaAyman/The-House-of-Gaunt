import React from 'react';

function GalleryImg({img, popImg, setPopImg, isOpen, setIsOpen}) {

    return (
        <div className='slider-item'>
            <img className='slider-image' src={img.src} alt={img.alt} onClick={() => {setIsOpen(true); setPopImg(img);}} />
        </div>
    );
}

export default GalleryImg;