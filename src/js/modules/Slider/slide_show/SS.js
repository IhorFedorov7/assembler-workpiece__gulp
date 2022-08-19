import { Swipe } from '../swipe/swipe.js';


export const SS = (  el, elem, obj, setting  ) => {
    let index = 0;
    
    const init = () => {

        const __active = (i, arr) => {
            for ( let act of arr ) act.classList.remove('activ');

            arr[i].classList.add('activ');
        };

        const pCS = index => {

            __active(index, elem);
            __active(index, obj.dots);
        };

        const nextSlide = () => {
            if ( index == obj.slidesL - 1 ) {

                index = 0;
                pCS(index);
            } else {
        
                index++;
                pCS(index);
            }
        };

        const prevSlide = () => {
            if ( index == 0 ) {
                
                index = obj.slidesL - 1;
                pCS(index);
            } else {
        
                index--;
                pCS(index);
            }
        };

        if ( obj.dots ) {
            obj.dots.forEach((item, indexD) => {
                item.addEventListener('click', () => {
                    
                    index = indexD;
                    pCS(index);
                });
            });
        }
        
        obj.next.addEventListener('click', nextSlide);
        obj.prev.addEventListener('click', prevSlide);

        if ( setting.time !== undefined ) {

            setInterval(nextSlide, setting.time);
        }

        if ( setting.swipe === true ) {

            Swipe(setting.order, nextSlide, prevSlide);
        }
    };


    init();
};