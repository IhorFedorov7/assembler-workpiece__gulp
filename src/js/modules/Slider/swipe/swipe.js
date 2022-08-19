export const Swipe = (order, next, prev) => {
    const block = document.querySelector(`[data-order="${order}"]`);

    block.addEventListener('touchstart', hendleTouchStart, false);
    block.addEventListener('touchmove', hendleTouchMove, false);

    const objParam = {
        x: null,
        y: null,
    };

    function hendleTouchStart( event ) {
        const firstTouch = event.touches[0];

        objParam.x = firstTouch.clientX;
        objParam.y = firstTouch.clientY;
    };

    function hendleTouchMove( event ) {
        if ( 
            !objParam.x ||
            !objParam.y
        ) {
            
            return false;
        }

        const firstTouch = event.touches[0];
        const objPos = {
            x: firstTouch.clientX - objParam.x,
            y: firstTouch.clientY - objParam.y,
            result: null
        };

        if ( Math.abs(objPos.x) > Math.abs(objPos.y) ) {
            if ( objPos.x > 0 ) {
                
                objPos.result = 'right';
            } else {
                
                objPos.result = 'left';
            }
        } else {
            if ( objPos.y > 0 ) {
                
                objPos.result = 'down';
            } else {
                
                objPos.result = 'top';
            }
        }

        objParam.x = null;
        objParam.y = null;

        if ( objPos.result === 'right' ) prev();
        else if ( objPos.result === 'left' ) next();
    };
};

