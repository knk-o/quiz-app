// HTMLの要素を取得
const resultElement = document.getElementById('result');
const answerButtons = document.querySelectorAll('.answer-btn');

// 正解の答え
const correctAnswer = '東京';

// ボタンがクリックされたときの処理
answerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedAnswer = event.target.textContent;

        // 答え合わせ
        if (selectedAnswer === correctAnswer) {
            resultElement.textContent = '正解！🎉';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = '残念！不正解です。';
            resultElement.style.color = 'red';
        }
    });
});
