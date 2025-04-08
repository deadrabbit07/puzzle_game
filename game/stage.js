


// 격자 만들기
// const blockSize = 150;  // 적절히 조절
const grid = document.querySelector('.grid')
const blockSize = 100;
const gridHeight = (Math.round(window.innerHeight / blockSize));
const gridWidth = (Math.round(window.innerWidth / blockSize));
const gridSize = gridHeight * gridWidth;

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', `width: ${blockSize}px; height: ${blockSize}px;`);
    div.classList.add('grid_block');
    grid.appendChild(div)
}
grid.setAttribute('style', `width: ${gridWidth * blockSize}px; height: ${gridHeight * blockSize}px;`)
// 격자 만들기



// ninkname
document.querySelector('.ninkname').textContent = localStorage.getItem('ninkname');
// ninkname



// stage
document.querySelector('.stage1').addEventListener('click', () => {
    location.href = 'game.html';
})

document.querySelector('.stage2').addEventListener('click', () => {
    location.href = 'nextStage.html';
})
