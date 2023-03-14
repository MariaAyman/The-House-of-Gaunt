import React from 'react';
import GalleryList from './GalleryList';

function Gallary({popImg, setPopImg, isOpen, setIsOpen}) {

    const imgs = [
        {
            src: 'imgs/thog2.png',
            alt: 'screen1'
        },
        {
            src: 'imgs/thog3.png',
            alt: 'screen2'
        },
        {
            src: 'imgs/thog4.png',
            alt: 'screen3'
        },
        {
            src: 'imgs/thog5.png',
            alt: 'screen4'
        },
        {
            src: 'imgs/thog6.png',
            alt: 'screen5'
        },
        {
            src: 'imgs/thog7.png',
            alt: 'screen6'
        },
        {
            src: 'imgs/thog8.png',
            alt: 'screen7'
        },
        {
            src: 'imgs/thog9.png',
            alt: 'screen8'
        },
        {
            src: 'imgs/thog10.png',
            alt: 'screen9'
        },
    ];

    return (
        <div id='galleryCont'>
            <span>
                Gallery:
            </span>
            <GalleryList imgs={imgs} popImg={popImg} setPopImg={setPopImg} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Gallary;