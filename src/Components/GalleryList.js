import React, {useState} from 'react';
import GalleryImg from './GalleryImg';
import SliderControl from './SliderControl';

function GalleryList({imgs, popImg, setPopImg, isOpen, setIsOpen}) {
    const [sliderHasMoved, setHasMoved] = useState(false); //boolean tracking if slider has moved from its initial position
    //const [sliderMoveDirection, setSliderDirection] = useState(null);
    //const [sliderMoving, setSliderMovement] = useState(false); //boolean for animation of slider
    //const [movePercent, setMovePercent] = useState(0); //amount to offset slider
    const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider items]
    const [itemsInRow] = useState(3); // number of items to be displayed across screen]

    // render the slider contents
    const renderSliderContent = () => {
        const totalItems = imgs.length;

        // slider content made up of left, mid, and right portions to allow continous cycling
        const left = [];
        const mid = [];
        const right = [];

        //get indexes to be displayed
        for (let i = 0; i < itemsInRow; i++){
            //left
            if(sliderHasMoved){
                if(lowestVisibleIndex + i - itemsInRow < 0){
                    left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
                } else{
                    left.push(i + lowestVisibleIndex -itemsInRow);
                }
            }

            //mid
            if (i + lowestVisibleIndex >= totalItems) {
                mid.push(i + lowestVisibleIndex - totalItems);
            } else {
                mid.push(i + lowestVisibleIndex);
            }

            //right
            if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
                right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
            } else {
                right.push(i + lowestVisibleIndex + itemsInRow -1);
            }
        }

        const shownIndex = [...mid];

        const sliderContents = [];
        for(let index of shownIndex){
            sliderContents.push(
                <GalleryImg img={imgs[index]} popImg={popImg} setPopImg={setPopImg} key={index} isOpen={isOpen} setIsOpen={setIsOpen} />
            );
        }

        return sliderContents;
    };
    
    // handle previous control
    const handlePrev = () => {
        const totalItems = imgs.length;

        //// get the new lowest visible index
        let newIndex;
        if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
            newIndex = 0;
        } else if (lowestVisibleIndex - itemsInRow < 0) {
            newIndex = totalItems - 1;
        } else {
            newIndex = lowestVisibleIndex - 1;
        }

        setLowestVisibleIndex(newIndex);
    };
    
    // handle previous control
    const handleNext = () => {
        const totalItems = imgs.length;

        // get the new lowest visible index
        let newIndex;
        if (lowestVisibleIndex === totalItems - 1) {
            newIndex = 0;
        } else {
            newIndex = lowestVisibleIndex + 1;
        }

        setLowestVisibleIndex(newIndex);

        // slider has now moved at least once - display Prev controls
        if (!sliderHasMoved) {
            setHasMoved(true);
        }
    };

    // style object to determine movement of slider
    let style = {};

    return (
        <div id='gallery' className='fade-in'>
            {sliderHasMoved && (
                <SliderControl arrowDirection={"left"} onClick={handlePrev} />
            )}
            <div className="slider-content" style={style}>
                {/* {imgs.map((i) => <GalleryImg img={i} key={i.alt} />)} */}
                {renderSliderContent()}
            </div>

            <SliderControl arrowDirection={"right"} onClick={handleNext} />
        </div>
    );
}

export default GalleryList;