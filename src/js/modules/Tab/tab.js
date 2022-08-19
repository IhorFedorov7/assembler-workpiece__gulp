export const Tab = (  ) => {
    const objSelect = {
        btn: document.querySelectorAll('.services__tab'),
        items: document.querySelectorAll('.tabs__item')
    };

    const __solution = ( nameR, nameA ) => {
        nameR.forEach(item => {

            item.classList.remove('active');
        });

        nameA.classList.add('active');
    };

    const __onTabClick = ( el ) => {
        el.addEventListener('click', () => {
            let currentB = el,
                tabId = currentB.getAttribute('data-tab'),
                currentT = document.querySelector(tabId);

            if ( currentB.classList.contains('active') ) return;

            __solution(objSelect.btn, currentB);
            __solution(objSelect.items, currentT);
        });
    }

    objSelect.btn.forEach(__onTabClick);
}