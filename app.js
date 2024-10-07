//! 10 Islamic questions 

const questions = [
    {
        question: "হজ করার জন্য কোন শহরে যেতে হয়?",
        answer: [
            { text: "ক) কায়রো", correct: false },
            { text: "খ) মক্কা", correct: true },
            { text: "গ) মদিনা", correct: false },
            { text: "ঘ) জেরুজালেম", correct: false },
        ]
    },
    {
        question: "পবিত্র কোরআন কতটি সুরা নিয়ে গঠিত?",
        answer: [
            { text: "ক) ১১৪", correct: true },
            { text: "খ) ১০১", correct: false },
            { text: "গ) ১২০", correct: false },
            { text: "ঘ) ১১২", correct: false },
        ]
    },
    {
        question: "ইসলামের পঞ্চম স্তম্ভ কোনটি?",
        answer: [
            { text: "ক) নামাজ", correct: false },
            { text: "খ) রোজা", correct: false },
            { text: "গ) হজ", correct: true },
            { text: "ঘ) যাকাত", correct: false },
        ]
    },
    {
        question: "ইসলামে কয়টি ফরজ নামাজ আছে?",
        answer: [
            { text: "ক) ৩টি", correct: false },
            { text: "খ) ৫টি", correct: true },
            { text: "গ) ৬টি", correct: false },
            { text: "ঘ) ৭টি", correct: false },
        ]
    },
    {
        question: "পবিত্র রমজান মাসে রোজা রাখা হয় কোন সময় থেকে?",
        answer: [
            { text: "ক) ভোর থেকে সন্ধ্যা পর্যন্ত", correct: true },
            { text: "খ) সন্ধ্যা থেকে সকাল পর্যন্ত", correct: false },
            { text: "গ) সকাল থেকে দুপুর পর্যন্ত", correct: false },
            { text: "ঘ) দুপুর থেকে সন্ধ্যা পর্যন্ত", correct: false },
        ]
    },
    {
        question: "ইসলামে প্রথম নবী কে ছিলেন?",
        answer: [
            { text: "ক) ঈসা (আঃ)", correct: false },
            { text: "খ) ইব্রাহিম (আঃ)", correct: false },
            { text: "গ) আদম (আঃ)", correct: true },
            { text: "ঘ) মূসা (আঃ)", correct: false },
        ]
    },
    {
        question: "হিজরি ক্যালেন্ডারের প্রথম মাসের নাম কী?",
        answer: [
            { text: "ক) শাবান", correct: false },
            { text: "খ) শাওয়াল", correct: false },
            { text: "গ) মহররম", correct: true },
            { text: "ঘ) রমজান", correct: false },
        ]
    },
    {
        question: "পবিত্র কাবা ঘর কোথায় অবস্থিত?",
        answer: [
            { text: "ক) মদিনা", correct: false },
            { text: "খ) মক্কা", correct: true },
            { text: "গ) কুফা", correct: false },
            { text: "ঘ) বাগদাদ", correct: false },
        ]
    },
    {
        question: "ইসলামের শেষ নবী কে?",
        answer: [
            { text: "ক) মূসা (আঃ)", correct: false },
            { text: "খ) ঈসা (আঃ)", correct: false },
            { text: "গ) মুহাম্মদ (সঃ)", correct: true },
            { text: "ঘ) দাউদ (আঃ)", correct: false },
        ]
    },
    {
        question: "কোন মাসে কোরআন নাজিল হয়?",
        answer: [
            { text: "ক) শাবান", correct: false },
            { text: "খ) মহররম", correct: false },
            { text: "গ) শাওয়াল", correct: false },
            { text: "ঘ) রমজান", correct: true },
        ]
    }
];

let nextBtn = document.querySelector('#next-btn');
let ansBtn = document.querySelector('.answer-btn');
let questionBTn = document.querySelector('#question');


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion()
}


function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionBTn.innerHTML = questionNo + '. ' + currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    })

}

function resetState() {
    nextBtn.style.display = "none";

    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e) {
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;

    } else {
        selectBtn.classList.add('incorrect');
    }

    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}


function showScore(){
    resetState();

    question.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = 'Play Agin';
    nextBtn.style.display = "block";
}

function  handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
