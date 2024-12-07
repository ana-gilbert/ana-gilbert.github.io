let box = document.getElementById('box');
let images = document.querySelectorAll('.fly-out');
const positions = [
    { x: '-580px', y: '-350px' }, // Top-left
    { x: '-420px', y: '-120px' },  // Top-right
    { x: '380px', y: '-660px' },  // Bottom-left
    { x: '380px', y: '-140px' }    // Bottom-right
];

box.addEventListener('click', function(){
    images.forEach((image, i) => {
        image.style.setProperty('--x', positions[i].x);
        image.style.setProperty('--y', positions[i].y);
        image.classList.add('go');
    });
});