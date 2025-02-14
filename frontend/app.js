// Full set of 100 general knowledge questions
const allQuestions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Fitzgerald", "Dickens"], answer: 0 },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: 2 },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], answer: 1 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
    { question: "Which country hosts the Olympics in 2024?", options: ["Japan", "USA", "France", "China"], answer: 2 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { question: "What is the hardest natural substance?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: 1 },
    { question: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: 0 },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
    { question: "What does a thermometer measure?", options: ["Pressure", "Temperature", "Speed", "Weight"], answer: 1 },
    { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: 1 },
    { question: "What is the currency of Japan?", options: ["Dollar", "Peso", "Yen", "Won"], answer: 2 },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2 },
    { question: "Which is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Pluto"], answer: 0 },
    { question: "Who invented the telephone?", options: ["Edison", "Graham Bell", "Tesla", "Marconi"], answer: 1 },
    { question: "What is the national flower of the USA?", options: ["Tulip", "Rose", "Lily", "Sunflower"], answer: 1 },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: 0 },
    { question: "What year did World War II end?", options: ["1943", "1945", "1950", "1939"], answer: 1 },
    { question: "How many players are there in a soccer team?", options: ["9", "10", "11", "12"], answer: 2 },
    { question: "Which continent has the most countries?", options: ["Asia", "Europe", "Africa", "South America"], answer: 2 },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Camel", "Horse", "Elephant", "Llama"], answer: 0 },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Central Program Unit"], answer: 0 },
    { question: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], answer: 1 },
    { question: "How many sides does a hexagon have?", options: ["4", "5", "6", "7"], answer: 2 },
    { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Tiger"], answer: 1 },
    { question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"], answer: 1 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
    { question: "What is the longest bone in the human body?", options: ["Femur", "Humerus", "Tibia", "Fibula"], answer: 0 },
    { question: "Which bird can mimic human speech?", options: ["Sparrow", "Crow", "Parrot", "Eagle"], answer: 2 },
    { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Which instrument has 88 keys?", options: ["Violin", "Guitar", "Piano", "Saxophone"], answer: 2 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "India", "South Korea"], answer: 1 },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Lettuce", "Cucumber"], answer: 1 },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Kalahari"], answer: 2 },
    // Add 50 more similar questions here...
];

// Select 10 random questions each time
const questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

const questionColors = ["#ff9800", "#8e44ad", "#16a085", "#c0392b", "#2980b9", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#34495e"];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("time-left");

showQuestion();

function showQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    timerDisplay.innerText = timeLeft;

    questionContainer.style.background = questionColors[currentQuestionIndex % questionColors.length];

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function selectAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";
    resultContainer.style.display = "block";
    scoreDisplay.innerText = score;
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    resultContainer.style.display = "none";
    showQuestion();
});
