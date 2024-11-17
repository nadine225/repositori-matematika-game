let currentScore = 0;
let username = '';
let history = [];

// Show the login page
function showLogin() {
    document.getElementById('cover-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
}

// Login function
function login() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-page').classList.add('hidden');
        startGame();
    } else {
        alert("Please enter your name!");
    }
}

// Start the game
function startGame() {
    currentScore = 0;
    showQuestion();
    document.getElementById('game-page').classList.remove('hidden');
}

// Show random math question
function showQuestion() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let operator = Math.random() > 0.5 ? '+' : '-';
    let questionText = `${num1} ${operator} ${num2}`;

    document.getElementById('question').innerText = questionText;
    document.getElementById('answer').value = '';
}

// Check the player's answer
function checkAnswer() {
    let questionText = document.getElementById('question').innerText;
    let correctAnswer = eval(questionText); // Evaluate the expression
    let userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === correctAnswer) {
        currentScore++;
        document.getElementById('score').innerText = currentScore;
    }

    showQuestion();
}

// End the game
function endGame() {
    document.getElementById('game-page').classList.add('hidden');
    document.getElementById('game-over-page').classList.remove('hidden');
    document.getElementById('final-score').innerText = currentScore;

    // Save the score to history
    history.push({ username, score: currentScore });
}

// Show score history
function showHistory() {
    document.getElementById('game-over-page').classList.add('hidden');
    document.getElementById('history-page').classList.remove('hidden');
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.innerText = `${entry.username}: ${entry.score}`;
        historyList.appendChild(listItem);
    });
}

// Back to the main menu
function backToMenu() {
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('game-over-page').classList.add('hidden');
    document.getElementById('cover-page').classList.remove('hidden');
}
