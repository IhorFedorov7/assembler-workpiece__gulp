import { SS } from './slide_show/SS.js';
import { SA } from './slider_adaptive/SA.js';

export const Slider = ( obj ) => {
    const __typeS = {
        'SA': SA,
        'SS': SS,
    };

    for ( let i in obj ) {
        const el = document.querySelector(`[data-order="${obj[i].order}"]`);
        const slides = el.querySelectorAll('.slide');
        const objOption = {
            slidesToShow: !obj[i].act ? null : obj[i].act,
            slidesToScroll: 1,
            position: 0,
            conteiner: null,
            prev: el.querySelector('#btn-prev'),
            next: el.querySelector('#btn-next'),
            track: el.querySelector('[class*="slider-img"]'),
            slidesL: slides.length,
            dots: !el.querySelectorAll('.dot').length ? null : el.querySelectorAll('.dot')
        };
        
        if ( Object.keys(__typeS).includes(obj[i].type) ) {

            __typeS[(obj[i].type)](el, slides, objOption, obj[i]);
        }
    };
};