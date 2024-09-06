const ball = document.getElementById('ball');
const startButton = document.getElementById('startButton');
let animationId;
let posX = 0;
let speedX = 2;
const ballSize = 50;

function moveBallSideways() {
    const windowWidth = window.innerWidth;

    if (posX + ballSize < windowWidth) {
        posX += speedX;
        ball.style.left = posX + 'px';
        animationId = requestAnimationFrame(moveBallSideways);
    } else {
        cancelAnimationFrame(animationId);  // 공이 오른쪽 끝에 닿으면 멈춤
    }
}

startButton.addEventListener('click', () => {
    posX = 0;  // 공의 위치 초기화
    ball.style.left = posX + 'px';  // 공의 위치를 화면 왼쪽으로
    moveBallSideways();  // 공이 오른쪽으로 이동
});
