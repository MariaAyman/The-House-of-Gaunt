import React from 'react';
import CastList from './CastList';

function Cast() {
    const cast = [
        {
            name: 'Maxence Danet-Fauvel',
            img: 'imgs/Cast/1. Maxence.jpg',
            character: 'Lord Voldemort',
            profile: 'https://www.imdb.com/name/nm10213736/',
        },
        {
            name: 'Frederic Souterelle',
            img: 'imgs/Cast/5. Frederic Souterelle.jpg',
            character: 'Bob Ogden',
            profile: 'https://www.imdb.com/name/nm2281567/?ref_=tt_cl_t_16'
        },
        {
            name: 'Rupert Wynne-James',
            img: 'imgs/Cast/10. Rupert Wynne-James.jpg',
            character: 'Marvolo Gaunt',
            profile: 'https://www.imdb.com/name/nm4695699/?ref_=tt_cl_t_17'
        },
        {
            name: 'Louise Molinaro',
            img: 'imgs/Cast/2. Louise Molinaro.jpg',
            character: 'Merope Gaunt',
            profile: 'https://www.imdb.com/name/nm5109911/?ref_=tt_cl_t_12'
        },
        {
            name: 'Éléonore Sarrazin',
            img: 'imgs/Cast/3. Éléonore Sarrazin.jpg',
            character: 'Death Eater',
            profile: 'https://www.imdb.com/name/nm0765539/?ref_=tt_cl_t_15'
        },
        {
            name: 'Anaïs Parello',
            img: 'imgs/Cast/4. Anaïs Parello.jpg',
            character: 'Cecilia',
            profile: 'https://www.imdb.com/name/nm6713876/?ref_=tt_cl_t_14'
        },
        {
            name: 'Sabine Crossen',
            img: 'imgs/Cast/6. Sabine Crossen.jpg',
            character: 'Aurore',
            profile: 'https://www.imdb.com/name/nm1644336/?ref_=tt_cl_t_4'
        },
        {
            name: 'Agatha Maksimova',
            img: 'imgs/Cast/7. Agatha Maksimova.jpg',
            character: 'Lily Potter',
            profile: 'https://www.imdb.com/name/nm11167512/?ref_=tt_cl_t_11'
        },
        {
            name: 'Axel Baille',
            img: 'imgs/Cast/8. Axel Baille.png',
            character: 'Death Eater',
            profile: 'https://www.imdb.com/name/nm9775915/?ref_=tt_cl_t_1'
        },
        {
            name: 'Charly Bouthemy',
            img: 'imgs/Cast/9. Charly Bouthemy.jpg',
            character: 'James Potter',
            profile: 'https://www.imdb.com/name/nm10956300/?ref_=tt_cl_t_2'
        },
        {
            name: 'Alexandre Majetniak',
            img: 'imgs/Cast/11. Alexandre Majetniak.jpg',
            character: 'Morfin Gaunt',
            profile: 'https://www.imdb.com/name/nm7066975/?ref_=tt_cl_t_10'
        },
        {
            name: 'Esther Lebeau',
            img: 'imgs/Cast/12. Esther Lebeau.jpeg',
            character: 'Death Eater',
            profile: 'https://www.imdb.com/name/nm11055280/?ref_=tt_cl_t_9'
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