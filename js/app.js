setInterval(() => {
    let date = new Date();
    document.querySelector('.second').style.width = (100 * date.getSeconds())/60+'%';
    document.querySelector('.minute').style.width = (100 * date.getMinutes())/60+'%';
    document.querySelector('.hour').style.width = (100 * date.getHours())/24 +'%';

}, 1000);




