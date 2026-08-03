const quiz = [
    {
        question: "Which language is used for web page interactivity?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "JavaScript"
    },
    {
        question: "Which tag creates a heading?",
        options: ["p", "h1", "img", "a"],
        answer: "h1"
    }
];

let index = 0;
let score = 0;
let time = 30;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

function loadQuestion() {
    question.innerHTML = quiz[index].question;
    options.innerHTML = "";

    quiz[index].options.forEach(option => {
        options.innerHTML += `
            <label>
                <input type="radio" name="ans" value="${option}">
                ${option}
            </label><br>
        `;
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="ans"]:checked');

    if (selected && selected.value === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        result.innerHTML = `Your score: ${score}/${quiz.length}`;
        question.innerHTML = "";
        options.innerHTML = "";
        clearInterval(timerInterval);
    }
}

loadQuestion();

const timerInterval = setInterval(function () {
    time--;
    timer.innerHTML = "Time: " + time;

    if (time <= 0) {
        clearInterval(timerInterval);

        result.innerHTML = `Time over! Score: ${score}/${quiz.length}`;
        question.innerHTML = "";
        options.innerHTML = "";
    }
}, 1000);