import React from 'react';

function CastListControl({ arrowDir, onClick }) {

    const upArrow = '▲';
    const downArrow = '▼';

    return (
        <div className={`cast-control ${arrowDir}`}>
            <div className='cast-control-arrow' onClick={onClick}>
                <span style={{fontSize: '10px'}}> {arrowDir === 'up' ? upArrow : downArrow} </span>
            </div>
        </div>
    );
}

export default CastListControl;