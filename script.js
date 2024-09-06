const ball = document.getElementById('ball');
const startButton = document.getElementById('startButton');
let animationId;
let posX = 0;
const speedX = 2;  // 공의 이동 속도
const ballSize = 50;  // 공의 크기

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
    cancelAnimationFrame(animationId);  // 진행 중인 애니메이션이 있으면 취소
    posX = 0;  // 공의 위치 초기화
    ball.style.left = posX + 'px';  // 공의 위치를 화면 왼쪽으로
    moveBallSideways();  // 공이 오른쪽으로 이동
});
