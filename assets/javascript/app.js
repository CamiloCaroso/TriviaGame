const start = document.getElementById("start");

const question = document.getElementById("question");
const qContainer = document.getElementById("q-container")
const title = document.getElementById("title");
const tText = document.getElementById("tText");
const timer = document.getElementById("timer");
const happen = document.getElementById("happen");
const next = document.getElementById("next");

const r1q = document.getElementById("q1r")
const r2q = document.getElementById("q2r")
const r3q = document.getElementById("q3r")
const r4q = document.getElementById("q4r")

start.addEventListener('click', function(){
    start.style.display = "none"
    question.style.display = "block"
    qContainer.style.display = "block"
    title.style.textAlign = "left"
    title.style.width = "200px"
    tText.style.display = "block"
    timer.style.display = "block"
    happen.style.display = "block";
    containerHeight.style.height = "auto";

    runQ1();
})




let q1 = {
    p: "What was the first cell phone ever to carry a built-in camera?",
    q: ["Sharp J-SH04", "Kyocera VP-210", "Sanyo SPC-5300", "Nokia 7650"]
}
let q2 = {
    p: "What is the best-selling desktop personal computer of all time?",
    q: ["Commodore 64", "IBM PC", "Apple II", "Atari 800"]
}
let q3 = {
    p: "Who launched the very first website?",
    q: ["Xerox", "Stanford", "CERN", "MIT"]
}
let q4 = {
    p: "What was the first web browser?",
    q: ["NeXT", "Mosaic", "Netscape", "WorldWideWeb"]
}
let q5 = {
    p: "What was the first mobile phone to market with a capacitive touchscreen?",
    q: ["Palm Treo", "LG KE850", "Apple iPhone", "Droid Razr"]
}

let ques;


function runQ1(){
    question.textContent = q1.p;
    r1q.textContent = q1.q[0]
    r2q.textContent = q1.q[1]
    r3q.textContent = q1.q[2]
    r4q.textContent = q1.q[3]
    doCount();
    ques = 2;
    option();
}

function runQ2(){
    question.textContent = q2.p;
    r1q.textContent = q2.q[0]
    r2q.textContent = q2.q[1]
    r3q.textContent = q2.q[2]
    r4q.textContent = q2.q[3]
    doCount();
    ques = 1;
    option();
    
}

function runQ3(){
    question.textContent = q3.p;
    r1q.textContent = q3.q[0]
    r2q.textContent = q3.q[1]
    r3q.textContent = q3.q[2]
    r4q.textContent = q3.q[3]
    doCount();
    ques = 3;
    option();
}

function runQ4(){
    question.textContent = q4.p;
    r1q.textContent = q4.q[0]
    r2q.textContent = q4.q[1]
    r3q.textContent = q4.q[2]
    r4q.textContent = q4.q[3]
    doCount();
    ques = 4;
    option();
}

function runQ5(){
    question.textContent = q5.p;
    r1q.textContent = q5.q[0]
    r2q.textContent = q5.q[1]
    r3q.textContent = q5.q[2]
    r4q.textContent = q5.q[3]
    doCount();
    ques = 2;
    option();
}



let whatQuestion = 1;

let block = true;


function option(){
    r1q.addEventListener('click', function(){
        if(block === true){
            if (ques === 1){
                r1q.style.background = "#43c23c";
                r1q.style.color = "white";
                blockQ();
                correct();
            } 
            if (ques !== 1){
                r1q.style.background = "#c2453c";
                r1q.style.color = "white";
                blockQ();
                goToCorrect(ques);
                losse();
            }
        }
    })
    r2q.addEventListener('click', function(){
        if (block === true){
            if (ques === 2){
                r2q.style.background = "#43c23c";
                r2q.style.color = "white";
                blockQ();
                correct();
            } 
            if (ques !== 2){
                r2q.style.background = "#c2453c";
                r2q.style.color = "white";
                blockQ();
                goToCorrect(ques);
                losse();
            }
        }
    })
    r3q.addEventListener('click', function(){
        if (block === true){
            if (ques === 3){
                r3q.style.background = "#43c23c";
                r3q.style.color = "white";
                blockQ();
                correct();
            } 
            if (ques !== 3){
                r3q.style.background = "#c2453c";
                r3q.style.color = "white";
                blockQ();
                goToCorrect(ques);
                losse();
            }
        }
    })
    r4q.addEventListener('click', function(){
        if (block === true){
            if (ques === 4){
                r4q.style.background = "#43c23c";
                r4q.style.color = "white";
                blockQ();
                correct();
            } 
            if (ques !== 4){
                r4q.style.background = "#c2453c";
                r4q.style.color = "white";
                blockQ();
                goToCorrect(ques);
                losse();
            }
        }
    })
}



function blockQ(){
    block = false;
    
}

function goToCorrect(correct){
    if (correct === 1){
        r1q.style.background = "#43c23c";
        r1q.style.color = "white";
    }
    if (correct === 2){
        r2q.style.background = "#43c23c";
        r2q.style.color = "white";
    }
    if (correct === 3){
        r3q.style.background = "#43c23c";
        r3q.style.color = "white";
    }
    if (correct === 4){
        r4q.style.background = "#43c23c";
        r4q.style.color = "white";
    }
    
}
function goToTimeOutCorrect(option){
    if (option === 1){
        r1q.style.background = "#3c7ac2";
        r1q.style.color = "white";
    }
    if (option === 2){
        r2q.style.background = "#3c7ac2";
        r2q.style.color = "white";
    }
    if (option === 3){
        r3q.style.background = "#3c7ac2";
        r3q.style.color = "white";
    }
    if (option === 4){
        r4q.style.background = "#3c7ac2";
        r4q.style.color = "white";
    }
    
}


let countNumber = 20;
timer.textContent = countNumber;
let every;
function doCount(){
    every = setInterval(function(){
        countNumber--;
        timer.textContent = countNumber;
        if (countNumber === 0){
            clearInterval(every);
            timeOut();
            blockQ();
            goToTimeOutCorrect(ques)
            
        }

    }, 1000)

}

let correctGuess = 0;
let incorrectGuess = 0;
let notTime = 0;



function timeOut(){
    happen.textContent = "Time Out!"
    notTime++;
    next.style.display = "block";
    if (whatQuestion === 5){
        next.textContent = "View Results";
    }
}

function losse(){
    happen.textContent = "Incorrect!"
    clearInterval(every);
    incorrectGuess++;
    next.style.display = "block";
    if (whatQuestion === 5){
        next.textContent = "View Results";
    }
}

function correct(){
    happen.textContent = "Correct!"
    clearInterval(every);
    correctGuess++;
    next.style.display = "block";
    if (whatQuestion === 5){
        next.textContent = "View Results";
    }
}



const containerHeight = document.getElementById("container");
const cAnswer = document.getElementById("cAnswer");
const correctAnswers = document.getElementById("correctAnswers")
const tAnswer = document.getElementById("tAnswer");
const timeOutAnswers = document.getElementById("timeOutAnswers")
const iAnswer = document.getElementById("iAnswer");
const incorrectAnswers = document.getElementById("incorrectAnswers")

const restard = document.getElementById("restard")

next.addEventListener('click', function(){
    next.style.display = "none";
    r1q.style.background = ""
    r2q.style.background = ""
    r3q.style.background = ""
    r4q.style.background = ""
    r1q.style.color = ""
    r2q.style.color = ""
    r3q.style.color = ""
    r4q.style.color = ""
    countNumber = 20;
    timer.textContent = countNumber;
    block = true;
    happen.textContent = "";
    whatQuestion++;
    if (whatQuestion === 2){
        runQ2();
    }
    if (whatQuestion === 3){
        runQ3();
    }
    if (whatQuestion === 4){
        runQ4();
    }
    if (whatQuestion === 5){
        runQ5();
    }
    if (next.textContent === "View Results"){
        qContainer.style.display = "none"
        containerHeight.style.height = "238px"
        question.style.display = "none";
        tText.style.display = "none"
        timer.style.display = "none"
        title.style.textAlign = "center"
        title.style.width = ""
        cAnswer.style.display = "block";
        tAnswer.style.display = "block";
        iAnswer.style.display = "block";
        finalResult();
    }
        
    
})

function finalResult(){
    correctAnswers.textContent = correctGuess;
    timeOutAnswers.textContent = notTime;
    incorrectAnswers.textContent = incorrectGuess;
    restard.style.display = "block";
}

restard.addEventListener('click', function(){
    whatQuestion = 1;
    start.style.display = "none"
    question.style.display = "block"
    qContainer.style.display = "block"
    title.style.textAlign = "left"
    title.style.width = "200px"
    tText.style.display = "block"
    timer.style.display = "block"
    happen.style.display = "block";
    correctGuess = 0;
    notTime = 0;
    incorrectGuess = 0;

    cAnswer.style.display = "none";
    tAnswer.style.display = "none";
    iAnswer.style.display = "none";
    runQ1();
    restard.style.display = "none"
    next.textContent = "Next Question ->"

});


