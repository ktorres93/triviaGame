window.onload = function() {
    $("#submit").on("click", timer.submit);
    $("#start").on("click", timer.start);
};


var correct = 0,
    incorrect = 0,
    answered = 0,
    unanswered = 0;

var intervalId;

var timerRunning = false;

var timer = {
    time: 5,

    start: function() {
        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            console.log(timer.time)
        }
    },

    count: function() {

        timer.time--;
        console.log(timer.time);
        $("#display").html(timer.time);
    },
    submit: function() {

        clearInterval(intervalId);
        timerRunning = false;
        time: 5;
    }};

     function timeUp() {

        if (timer.time = 0) {
            alert("times up!");
            timerRunning = false;
        }

      timeUp();


    

    // function rightAns() {

    //     if () {
    //         correct++;
    //         answered++;
    //     } else {
    //         unanswered++
    //     }

    // }

    // function wrongAns() {

    //     if () {
    //         incorrect++;
    //         answered++;
    //     } else {
    //         unanswered++
    //     }
    // }

    // function reset() {

    // 	if(timer.time = 0){
    // 		time
    // 	}

    // }
};
// }

// THIS IS FOR HARD
// <!-- docment ready
// name global variables:{

// place: answered+unanswered
// correct:
// incorrect: 
// answered:
// Unanswered: ( if the timer hits 0)
// Questions:[]
// 	{ ? = whats 1 + 1
// 	correct:2
// 	incorrect:123
// 	incorrect: 134
// 	incorrect: 3
// 	}
// **Q1=question[0]**

// function.time(){
// 	setTimeout(function()){
// 	(question)
// 	~30sec (30000)
// }
// ifTime= 0 unaswered++

// else {
// 	call next question
// 	}
// }
// }


// onclick function disappear start
// start function{
// 	if unanswered= 0 && answered = 0 then start game
// }
// 	fires question 1
// 	if click = correct{
// 	correct++;
// 	answer++;
// 	place++;

// 	}

// >>timerstarts
// question and answerchoices appear
// clicking answer gives feedback on correctness
// >>  -->