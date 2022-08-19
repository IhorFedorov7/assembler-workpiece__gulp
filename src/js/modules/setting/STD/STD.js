export const STD = () => {
    const screen = {
        'phone': document.documentElement.clientWidth <= 480,
        'tablets': document.documentElement.clientWidth >= 481 && document.documentElement.clientWidth <= 1050,
        'netbook': document.documentElement.clientWidth >= 1051 && document.documentElement.clientWidth <= 1600,
        'PC': document.documentElement.clientWidth >= 1601,
    };

    for ( const [key, value] of Object.entries(screen) ) {
        if ( value === true ) {

            return key;
        }
    };
};