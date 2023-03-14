import React from 'react';

function SliderControl({ arrowDirection, onClick }) {

    const rightArrow = '▶';
    const leftArrow = '◀';

    return (
        <div className={`slider-control ${arrowDirection}`}>
            <div className="slider-control-arrow" onClick={onClick}>
                <span> {arrowDirection === "right" ? rightArrow : leftArrow} </span>
            </div>
        </div>
    );
}

export default SliderControl;