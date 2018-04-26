let quiz = [{
        question: "In 'The Witcher' series, what material is considered best for slaying monsters?",
        answers: [
            "steel",
            "titanium",
            "silver",
            "iron"
        ],
        correct: 3,
        clip: "https://giphy.com/embed/YmW0ajiznUty"
    },
    {
        question: "Which series is the popular popular game 'Skyrim' part of?",
        answers: [
            "Dungeons & Dragons",
            "Dragon Age",
            "Might & Magic",
            "The Elder Scrolls"
        ],
        correct: 4,
        clip: "https://giphy.com/embed/wG9R3HQ65ofeg"
    },
    {
        question: "'Defense of the Ancients 2' (DotA 2) was initially a mod for:",
        answers: [
            "'League of Legends'",
            "'Warcraft III'",
            "'World of Warcraft'",
            "'Half-Life'"
        ],
        correct: 2,
        clip: "https://giphy.com/embed/fLou65gcR9rHy"
    },
    {
        question: "Who is the antagonist in the 'Half-Life' franchise?",
        answers: [
            "G-Man",
            "C-Man",
            "Morgan Freeman",
            "Vaas Montenegro"
        ],
        correct: 1,
        clip: "https://giphy.com/embed/gEa2H9f6UW772"
    },
    {
        question: "Which company bought 'Minecraft' in 2014?",
        answers: [
            "EA",
            "Blizzard",
            "Valve",
            "Microsoft"
        ],
        correct: 4,
        clip: "https://giphy.com/embed/HxcDjbSp56G5y"
    },
    {
        question: "When playing 'Portal 2' on singleplayer, you are:",
        answers: [
            "Atlas",
            "P-Body",
            "GLaDOS",
            "Chell"
        ],
        correct: 4,
        clip: "https://giphy.com/embed/XK292kkzPXrna"
    },
    {
        question: "Which one of the following is not a 'special infected' in 'Left 4 Dead 2'?",
        answers: [
            "the Witch",
            "the Bomber",
            "the Hunter",
            "the Boomer"
        ],
        correct: 2,
        clip: "https://giphy.com/embed/LLHJMX3d5Ttm0"
    },
    {
        question: "Which one of these settlements from 'Fallout 4' is inhabited?",
        answers: [
            "Croup Manor",
            "Spectacle Island",
            "The Slog",
            "Sanctuary Hills"
        ],
        correct: 3,
        clip: "https://giphy.com/embed/p1j81pR1bNUuk"
    },
    {
        question: "The 'God of War' franchise is exclusive to the:",
        answers: [
            "PlayStation",
            "Xbox",
            "Wii",
            "PC"
        ],
        correct: 1,
        clip: "https://giphy.com/embed/3ohc0PGbUHdXd30yf6"
    },
    {
        question: "Who is the founder of the asylum for the criminally insane from the 'Batman' franchise?",
        answers: [
            "Hugo Strange",
            "Jonathan Crane",
            "Ra's al Ghul",
            "Amadeus Arkham"
        ],
        correct: 4,
        clip: "https://giphy.com/embed/PXpcKmoKrR7Q4"
    }
];

let currentQuestion = -1;
let score = 0;

function renderHeader() {
    let body = document.body;
    let header = document.createElement("header");
    let headerP = document.createElement('p');
    let headerText = document.createTextNode("The Memorable Gaming Quiz");

    headerP.appendChild(headerText);
    header.appendChild(headerP);
    header.setAttribute("id", "header");
    body.appendChild(header);
}

function renderQuestion(currentQuestion) {
    let body = document.body;
    let needReplace = document.getElementById("outputContainer");
    let output = document.createElement("article");
    let clip = document.createElement("div");
    let question = document.createElement("div");
    let questionP = document.createElement("p");
    let questionText = document.createTextNode(`[${currentQuestion+1}/${quiz.length}] ${quiz[currentQuestion].question}`);
    let answers = document.createElement("div");
    let number = 0;

    body.setAttribute("id", "body");
    output.setAttribute("id", "outputContainer");
    output.setAttribute("class", "wrapperMain");
    header.setAttribute("id", "header");
    output.appendChild(header);
    clip.setAttribute("style", "width:100%;height:0;padding-bottom:56%;position:relative;");
    clip.innerHTML = `<iframe src="${quiz[currentQuestion].clip}" width="100%" height="100%" 
        style="position:absolute" frameBorder="0"></iframe>`;
    clip.setAttribute("id", "clip");
    output.appendChild(clip);
    questionP.appendChild(questionText);
    question.appendChild(questionP);
    question.setAttribute("id", "question");
    output.appendChild(question);
    quiz[currentQuestion].answers.forEach(element => {
        let answerButton = document.createElement("button");
        let answerText = document.createTextNode(element);
        answerButton.appendChild(answerText);
        number++;
        if (number == quiz[currentQuestion].correct)
            answerButton.setAttribute("onclick", "correct();");
        else
            answerButton.setAttribute("onclick", "renderNext();");
        answers.appendChild(answerButton);
    });
    answers.setAttribute("id", "answers");
    answers.setAttribute("class", "wrapperSecondary");
    output.appendChild(answers);
    if (currentQuestion == 0)
        body.appendChild(output);
    else
        body.replaceChild(output, needReplace);
}

function start() {
    renderHeader();
    renderNext();
    renderFooter();
}

function startover() {
    currentQuestion = -1;
    score = 0;
    document.body.innerHTML = '';
    renderHeader();
    renderQuestion(++currentQuestion);
    renderFooter();
}

function start2() {
    body.innerHTML = '';
    renderHeader();
    renderQuestion(++currentQuestion);
    renderFooter();
}

function renderStart() {
    let body = document.body;
    let output = document.createElement("article");
    let question = document.createElement("div");
    let questionP = document.createElement("p");
    let questionText = document.createTextNode(`Welcome! Here you have a quiz of ${quiz.length} questions ` +
        `to put your gaming knowledge to the ultimate test.`);
    let answers = document.createElement("div");
    let answerText;

    body.setAttribute("id", "body");
    output.setAttribute("id", "outputContainer");
    output.setAttribute("class", "wrapperMain");
    header.setAttribute("id", "header");
    output.appendChild(header);
    questionP.appendChild(questionText);
    question.appendChild(questionP);
    question.setAttribute("id", "questionEnding");
    output.appendChild(question);
    for (i = 1; i <= 2; i++) {
        let answerButton = document.createElement("button");
        if (i == 1)
            answerText = document.createTextNode("Bring it on");
        else
            answerText = document.createTextNode("I'm not sure");
        answerButton.appendChild(answerText);
        answerButton.setAttribute("onclick", "start2();");
        answers.appendChild(answerButton);
    }
    answers.setAttribute("id", "answersEnding");
    answers.setAttribute("class", "wrapperSecondary");
    output.appendChild(answers);
    body.appendChild(output);
}

function renderEnding() {
    let body = document.body;
    let needReplace = document.getElementById("outputContainer");
    let output = document.createElement("article");
    let clip = document.createElement("div");
    let question = document.createElement("div");
    let questionP = document.createElement("p");
    let questionText = document.createTextNode(`Congratulations! You answered correctly ${score} out of ${quiz.length} questions.`);
    let answers = document.createElement("div");
    let answerText;

    body.setAttribute("id", "body");
    output.setAttribute("id", "outputContainer");
    output.setAttribute("class", "wrapperMain");
    header.setAttribute("id", "header");
    output.appendChild(header);
    questionP.appendChild(questionText);
    question.appendChild(questionP);
    question.setAttribute("id", "questionEnding");
    output.appendChild(question);
    for (i = 1; i <= 2; i++) {
        let answerButton = document.createElement("button");
        if (i == 1)
            answerText = document.createTextNode("Try again");
        else
            answerText = document.createTextNode("Git gud");
        answerButton.appendChild(answerText);
        answerButton.setAttribute("onclick", "startover();");
        answers.appendChild(answerButton);
    }
    answers.setAttribute("id", "answersEnding");
    answers.setAttribute("class", "wrapperSecondary");
    output.appendChild(answers);
    body.replaceChild(output, needReplace);
}

function renderNext() {
    if (currentQuestion == -1)
        renderStart();
    else if (currentQuestion == 9)
        renderEnding();
    else
        renderQuestion(++currentQuestion);

}

function correct() {
    score++;
    renderNext();
}

function renderFooter() {
    let body = document.body;
    let footer = document.createElement("footer");
    let footerP = document.createElement('p');
    let footerText = document.createTextNode("(All the names of games, companies, and characters" +
        " are property of their respective owners. All the names used on this website are" +
        " for identification purposes only. Use of these names does not imply endorsement.)");

    footerP.appendChild(footerText);
    footer.appendChild(footerP);
    footer.setAttribute("id", "footer");
    body.appendChild(footer);
}

window.addEventListener("load", start);