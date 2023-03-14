import React from 'react';
import CastList from './CastList';

function Cast() {
    const cast = [
        {
            name: 'Maxence Danet-Fauvel',
            img: 'imgs/Cast/1. Maxence.jpg'
        },
        {
            name: 'Frederic Souterelle',
            img: 'imgs/Cast/5. Frederic Souterelle.jpg'
        },
        {
            name: 'Rupert Wynne-James',
            img: 'imgs/Cast/10. Rupert Wynne-James.jpg'
        },
        {
            name: 'Louise Molinaro',
            img: 'imgs/Cast/2. Louise Molinaro.jpg'
        },
        {
            name: 'Éléonore Sarrazin',
            img: 'imgs/Cast/3. Éléonore Sarrazin.jpg'
        },
        {
            name: 'Anaïs Parello',
            img: 'imgs/Cast/4. Anaïs Parello.jpg'
        },
        {
            name: 'Sabine Crossen',
            img: 'imgs/Cast/6. Sabine Crossen.jpg'
        },
        {
            name: 'Agatha Maksimova',
            img: 'imgs/Cast/7. Agatha Maksimova.jpg'
        },
        {
            name: 'Axel Baille',
            img: 'imgs/Cast/8. Axel Baille.png'
        },
        {
            name: 'Charly Bouthemy',
            img: 'imgs/Cast/9. Charly Bouthemy.jpg'
        },
        {
            name: 'Alexandre Majetniak',
            img: 'imgs/Cast/11. Alexandre Majetniak.jpg'
        },
        {
            name: 'Esther Lebeau',
            img: 'imgs/Cast/12. Esther Lebeau.jpeg'
        },
    ];

    return (
        <div id='castCont'>
            <span>Cast:</span>
            <CastList cast={cast} />
        </div>
    );
}

export default Cast;