export const Rating = ( obj ) => {
    const objPerens = {
        blockAnaliticsRating: document.querySelector('.progres__stars'),
        blockNamberRating: document.querySelector('.reviews__header-stars')
    };

    let ratings = 0,
        stars = 0;

    for ( let i in obj ) {

        ratings += +Object.values(obj[i]);
    };

    for ( let i in obj ) {
        
        stars += +Object.keys(obj[i]) * Object.values(obj[i]);
        
        objPerens.blockAnaliticsRating.innerHTML += `
            <div> 
                <h4>${Object.keys(obj[i])[0]}</h4>
                <div class="progres-bar">
                    <div class="progres" style="width: ${Object.values(obj[i]) * 100 / ratings}%"></div>
                </div>
            </div>
        `;
    };
    
    objPerens.blockNamberRating.innerHTML += `
        <div class="reviews__stars-head">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.998 10.916L20.7049 9.50166L16.5505 0.682262C16.4371 0.440792 16.2504 0.245317 16.0198 0.126498C15.4415 -0.172464 14.7388 0.0766713 14.4496 0.682262L10.2953 9.50166L1.0021 10.916C0.745888 10.9543 0.511636 11.0808 0.332287 11.2724C0.115464 11.5058 -0.00401488 11.8198 0.000103019 12.1453C0.00422092 12.4709 0.131599 12.7814 0.354248 13.0087L7.078 19.8734L5.48948 29.5667C5.45223 29.7921 5.47606 30.024 5.55826 30.2361C5.64047 30.4481 5.77776 30.6318 5.95458 30.7662C6.13139 30.9007 6.34065 30.9806 6.55862 30.9969C6.77659 31.0132 6.99456 30.9652 7.18781 30.8583L15.5001 26.2819L23.8123 30.8583C24.0393 30.9848 24.3028 31.027 24.5554 30.981C25.1922 30.866 25.6205 30.2336 25.5107 29.5667L23.9221 19.8734L30.6459 13.0087C30.8289 12.8209 30.9497 12.5756 30.9863 12.3073C31.0851 11.6366 30.6386 11.0156 29.998 10.916Z" fill="#BC5555"/>
            </svg>                       
            <h2>${(stars / ratings).toFixed(1)}</h2>       
        </div>
        <p>${ratings} review</p> 
    `;
};