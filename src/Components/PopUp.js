import React from 'react';

function PopUp({popImg, setPopImg, isOpen, setIsOpen}) {
    console.log(isOpen);
    return (
        <div className='popup'>
            <div className='popup-content'>
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                {/* <img src={img.src} alt={img.alt} /> */}
                {/* <div>This is popup</div> */}
                <img src={popImg.src} alt={popImg.alt} />
            </div>
        </div>
    );
}

export default PopUp;