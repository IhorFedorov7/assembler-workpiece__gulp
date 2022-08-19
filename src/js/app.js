import * as flsFunctions from './modules/setting/checkWebp/checkWebp.js';
import * as elFunction from './modules/setting/elHeight/elHeight.js';
import * as headFunction from './modules/Header/header.js';
import * as slFunctions from './modules/Slider/slider.js';
import * as tabFunctions from './modules/Tab/tab.js';
import * as accFunctions from './modules/Accordion/accordion.js';
import * as ratFunctions from './modules/Rating/rating.js';


flsFunctions.isWebp();
headFunction.Header();
slFunctions.Slider([
    {
        order: 1,
        time: 5000,
        swipe: true,
        type: 'SS',
    },
    {
        order: 2,
        act: {
            'phone': 1.5,
            'tablets': 2.5,
            'netbook': 3,
            'PC': 4,
        },
        type: 'SA',
        swipe: true,
        disBtn: true,
    },
    {
        order: 3,
        act: {
            'phone': 1.5,
            'tablets': 2.5,
            'netbook': 3,
            'PC': 4,
        },
        type: 'SA',
        swipe: true,
        disBtn: true,
    }
]);
tabFunctions.Tab();
accFunctions.Accordion();
ratFunctions.Rating([
    { 5: 9000 },
    { 4: 2000 },
    { 3: 1200 },
    { 2: 100 },
    { 1: 21 }
]);

window.onload = function() {
    elFunction.SH('section', {
        'phone': '.container', 
        'tablets': '.container',
        'netbook': '.section__left',
        'PC': '.section__left',
    });
 };
