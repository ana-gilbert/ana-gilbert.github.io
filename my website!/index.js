let box = document.getElementById('box');
let images = document.querySelectorAll('.fly-out');
const positions = [
    { x: '-450px', y: '-400px' }, // Top-left
    { x: '-490px', y: '-120px' },  // Top-right
    { x: '200px', y: '-630px' },  // Bottom-left
    { x: '350px', y: '-140px' }    // Bottom-right
];

box.addEventListener('click', function(){
    images.forEach((image, i) => {
        image.style.setProperty('--x', positions[i].x);
        image.style.setProperty('--y', positions[i].y);
        image.classList.add('go');
    });
});