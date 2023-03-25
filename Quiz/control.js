//initializing varibales
let seconds = 60;
let timeout;
let timer_on;
let score = 0;
let pressed = false;
var out = document.getElementById("output");
//this function is used to display the time inside the count class
function timedcount() {
    //this checks whether the seconds is 0
    if (seconds === 0) {
        //this will output to the count class saying 0 : 00 using innerHTML
        document.getElementById("count").innerHTML = "0 : 00";
        //this will call stopcount function
        stopcount();
    } else {
        //this will call timedcount function every one second
        timeout = setTimeout(timedcount, 1000);
    }
    //this checks whether seconds greater than 9
    if (seconds > 9) {
        //this uses innerHTML and outputs in a format like "0 : "seconds
        document.getElementById("count").innerHTML = "0 : " + seconds;
        //this will load the current time to time variable
        time = "0 : " + seconds;
    }
    else {
        //this will write in this format
        document.getElementById("count").innerHTML = "0 : 0" + seconds;
        time = "0 : 0" + seconds;
    }
    //seconds decreased by one
    seconds--;
}
//this will run once start button is pressed
function startcount() {
    //this is to confirm that start is pressed
    pressed = true;
    //to check whether start is already pressed
    if (!timer_on) {
        timer_on = 1;
        //this checks whether time has finished
        if (seconds === 0) {
            //this call function stopcount()
            stopcount();
            //if not it will call timedcount()
        } else {
            timedcount();
        }

    }
}
//this will run when results is presses or when seconds becomes 0
function stopcount() {
    //this will stop setinterval
    clearTimeout(timeout);
    timer_on = 0;
    timer = true;
    //this is to check whether start is presses or no
    if (pressed === false) {
        //alerts to press
        alert("Please press the Start button!!")
    }
    //this checks whether pressed is true then shows the results
    while (pressed === true) {
        //assigning value of answer to question1
        let question1 = document.quiz.question1.value;
        //this checks whether answer is correct
        if (question1 === "1") {
            //increases score by 2
            score = score + 2;
        } else {
            //decrease score by 1
            score = score - 1;
        }

        let question2 = document.quiz.question2.value;
        if (question2 === "3") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question3 = document.quiz.question3.value;
        if (question3 === "3") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question4 = document.quiz.question4.value;
        if (question4 === "4") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question5 = document.quiz.question4.value;
        if (question5 === "4") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question6 = document.quiz.question6.value;
        if (question6 === "1") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question7 = document.quiz.question7.value;
        if (question7 === "2") {
            score++;
        } else {
            score = score - 1;
        }

        let question8 = document.quiz.question8.value;
        if (question8 === "3") {
            score = score + 2;
        } else {
            score = score - 1;
        }

        let question9 = document.quiz.question9.value;
        if (question9 === "3") {
            score = score + 2;
        } else {
            score = score - 1;
        }
        let question10 = document.quiz.question10.value;
        if (question10 === "4") {
            score = score + 2;
        } else {
            score = score - 1;
        }
        //this checks whether score greate than zero
        if (score > 0) {
            //changes background color to #4d4dff
            document.body.style.backgroundColor = "#4d4dff";
          //this checks whether score less than zero  
        } else if (score < 0) {
            //this changes color to #ff3333
            document.body.style.backgroundColor = "#ff3333";
        }
        console.log(score);
        out.innerHTML = "The score is: " + score;
        return score;
    }
}

