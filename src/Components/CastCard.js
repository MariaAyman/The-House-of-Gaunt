import React from 'react';

function CastCard({actor}) {
    return (
        <div className='cast-item'>
            <div className='cast-img'>
                <img src={actor.img} alt={actor.name} />
            </div>
            <div className='cast-name'>
                <a href={actor.profile} target="_blank" rel="noreferrer">{actor.name}</a>
                <span id='character'>{actor.character}</span>
            </div>
        </div>
    );
}

export default CastCard;