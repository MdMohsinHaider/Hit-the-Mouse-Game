const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
let score = 0;
let gameInterval = null;

function randomPosition() {
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

function createMouse() {
    const mouse = document.createElement('div');
    mouse.classList.add('mouse');
    const pos = randomPosition();
    mouse.style.left = pos.x + 'px';
    mouse.style.top = pos.y + 'px';
    mouse.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        mouse.remove();
    });
    gameArea.appendChild(mouse);
    setTimeout(() => {
        mouse.remove();
    }, 1000); // Remove after 1 second if not clicked
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        createMouse();
    }, 1200);
}

startBtn.addEventListener('click', startGame);
