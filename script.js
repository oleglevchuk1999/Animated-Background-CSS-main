const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 1200;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}


const rainbowColors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#9400D3'];

const colorBoxes = document.querySelectorAll('.colorBox');

colorBoxes.forEach((colorBox) => {
    colorBox.addEventListener('mouseenter', () => {
        colorBox.style.backgroundColor = getRandomRainbowColor();
    });

    colorBox.addEventListener('mouseleave', () => {
        colorBox.style.backgroundColor = '';
    });
});

function getRandomRainbowColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}