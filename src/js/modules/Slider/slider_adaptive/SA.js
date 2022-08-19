import { Swipe } from '../swipe/swipe.js';
import { STD } from '../../setting/STD/STD.js';


export const SA = ( el, elem, obj, setting ) => {
    let itemWidth,
        movePosition;

    const init = () => {
        if ( obj.conteiner === null ) {

            obj.conteiner = el.querySelector('.sleder-container');
        }

        itemWidth = obj.conteiner.clientWidth / obj.slidesToShow[STD()];
        movePosition = obj.slidesToScroll * itemWidth;

        for ( let act of elem ) {
            
            act.style.minWidth = `${itemWidth}px`;
        };
    };

    window.addEventListener('resize', init);

    init();

    const setPosition = () => {

        obj.track.style.transform = `translateX(${obj.position}px)`;
    };

    const checkBtns = ( bool ) => {
        if ( bool ) {
            
            obj.position === 0 ? obj.prev.classList.remove('activ') : obj.prev.classList.add('activ');
            obj.position <= -(obj.slidesL - obj.slidesToShow[STD()]) * itemWidth ? obj.next.classList.remove('activ') : obj.next.classList.add('activ');
        }
    };

    const pCS = index => {

        setPosition();
        checkBtns(index);
    };

    const nextSlide = () => {
        const itemLeft = obj.slidesL - (Math.abs(obj.position) + obj.slidesToShow[STD()] * itemWidth) / itemWidth;
    
        obj.position -= itemLeft >= obj.slidesToScroll ? movePosition : itemLeft * itemWidth;
        
        pCS(setting.disBtn);
    };
    
    const prevSlide = () => {
        const itemLeft = Math.abs(obj.position) / itemWidth;
    
        obj.position += itemLeft >= obj.slidesToScroll ? movePosition : itemLeft * itemWidth;

        pCS(setting.disBtn);
    };

    obj.next.addEventListener('click', nextSlide);
    obj.prev.addEventListener('click', prevSlide);

    if ( setting.swipe === true ) {

        Swipe(setting.order, nextSlide, prevSlide);
    }

    checkBtns(setting.disBtn);
};