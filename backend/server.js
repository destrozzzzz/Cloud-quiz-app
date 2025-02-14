const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const questions = [
    { text: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { text: "What is 5 + 7?", options: ["10", "12", "15", "14"], answer: "12" },
    { text: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { text: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: "Shakespeare" },
    { text: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { text: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { text: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: "Newton" },
    { text: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { text: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" }
];

// Function to shuffle and return 10 questions
function getRandomQuestions() {
    return questions.sort(() => 0.5 - Math.random()).slice(0, 10);
}

app.get("/api/questions", (req, res) => {
    res.json(getRandomQuestions());
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
