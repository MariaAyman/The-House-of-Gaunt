import React, { useState } from 'react';
import CastCard from './CastCard';
import CastListControl from './CastListControl';

function CastList({cast}) {
    const [listHasMoved, setHasMoved] = useState(false);
    const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0);
    const [itemsInCol] = useState(2);

    const renderCastContent = () => {
        const totalItems = cast.length;

        const up = [];
        const mid = [];
        const down = [];

        for(let i = 0; i < itemsInCol; i++){
            //up
            if(listHasMoved){
                if(lowestVisibleIndex + i - itemsInCol < 0){
                    up.push(totalItems - itemsInCol + lowestVisibleIndex + i);
                } else{
                    up.push(i + lowestVisibleIndex - itemsInCol );
                }
            }

            //mid
            if(i + lowestVisibleIndex >= totalItems){
                mid.push(i + lowestVisibleIndex - totalItems);
            } else{
                mid.push(i + lowestVisibleIndex);
            }

            //right
            if(i + lowestVisibleIndex + itemsInCol >= totalItems){
                down.push(i + lowestVisibleIndex + itemsInCol - totalItems);
            } else{
                down.push(i + lowestVisibleIndex + itemsInCol);
            }
        }

        const shownIndex = [...mid];

        const listContent = [];
        for(let index of shownIndex){
            listContent.push(
                <CastCard actor={cast[index]} key={index} />
            );
        }

        return listContent;
    };

    const handlePrev = () => {
        const totalItems = cast.length;

        let newIndex;
        if(lowestVisibleIndex < itemsInCol && lowestVisibleIndex !== 0){
            newIndex = 0;
        } else if(lowestVisibleIndex - itemsInCol < 0){
            newIndex = totalItems - 1;
        } else{
            newIndex = lowestVisibleIndex - 1;
        }

        setLowestVisibleIndex(newIndex);
    };

    const handleNext = () => {
        const totalItems = cast.length;

        // get the new lowest visible index
        let newIndex;
        if (lowestVisibleIndex === totalItems - 1) {
            newIndex = 0;
        } else {
            newIndex = lowestVisibleIndex + 1;
        }

        setLowestVisibleIndex(newIndex);

        // slider has now moved at least once - display Prev controls
        if (!listHasMoved) {
            setHasMoved(true);
        }
    };

    return (
        <div id='cast' className='fade-in'>
            {listHasMoved && (
                <CastListControl arrowDir={'up'} onClick={handlePrev} />
            )}
            <div className='cast-content'>
                {/* {cast.map((c) => <CastCard actor={c} key={c.name} />)} */}
                {renderCastContent()}
            </div>

            <CastListControl arrowDir={'down'} onClick={handleNext} />
        </div>
    );
}

export default CastList;