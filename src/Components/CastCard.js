import React from 'react';

function CastCard({actor}) {
    return (
        <div className='cast-item'>
            <div className='cast-img'>
                <img src={actor.img} alt={actor.name} />
            </div>
            <div className='cast-name'>{actor.name}</div>
        </div>
    );
}

export default CastCard;