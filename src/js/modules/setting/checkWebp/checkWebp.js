// Поддержки WEBP, добавление класса .webp или .no-webp для HTML 
export function isWebp () {

    function testWebP ( calldack ) {
        let webP = new Image();

        webP.onload = webP.onerror = function () {
            calldack( webP.height == 2 );
        };

        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    };

    testWebP( function ( support ) {
        let className = support === true ? 'webp' : 'no-webp';

        document.documentElement.classList.add(className);
    });
};