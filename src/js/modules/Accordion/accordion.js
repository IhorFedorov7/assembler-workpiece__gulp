export const Accordion = () => {
    const accordions = document.querySelectorAll('.accordion');

    const __attr = ( el, arr ) => {
        
        for ( let i in arr ) {
            if ( 
                arr[i][0] !== undefined &&
                arr[i][1] !== undefined
            ) {
                
                el[i].setAttribute(arr[i][0], arr[i][1]);
            }
        }
    };

    const __event = ( elem ) => {

        elem.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const objEl = [
                self,
                self.parentElement.querySelector('[aria-hidden]')
            ];

            self.querySelector('.btn').classList.toggle('open');

            if ( self.querySelector('.btn').classList.contains('open') ) {

                __attr(objEl, [
                    ['aria-expanded', false],
                    ['aria-hidden', true]
                ]);
            } else {

                __attr(objEl, [
                    ['aria-expanded', true],
                    ['aria-hidden', false]
                ]);
            }
        });
    };

    accordions.forEach( el => {

        __event(el)
    });
};