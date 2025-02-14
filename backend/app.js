const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const questions = [
    { text: "What is Kubernetes?", options: ["A container runtime", "A container orchestrator", "A database", "A cloud provider"], answer: "A container orchestrator" },
    { text: "What does CI/CD stand for?", options: ["Continuous Integration & Continuous Deployment", "Code Integration & Code Deployment", "Cloud Integration & Cloud Development", "Continuous Improvement & Continuous Delivery"], answer: "Continuous Integration & Continuous Deployment" }
];

app.get("/api/questions", (req, res) => {
    res.json(questions);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
