let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel ');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');    
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.thumbnail .item');
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
}

// let itemThumbnail = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailDom.appendChild(itemThumbnail[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)

// else{
//     listItemDom.prepend(itemSlider[itemSlider.length - 1]);
//     thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
//     carouselDom.classList.add('prev');
// }
// clearTimeout(runTimeOut);
// runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove('next');
//     carouselDom.classList.remove('prev');
// }, timeRunning);

// clearTimeout(runNextAuto);
// runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)