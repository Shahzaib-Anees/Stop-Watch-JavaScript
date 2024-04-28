let timerDisplayer = document.getElementById("stopWatch_timer");
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerDisplayer.innerHTML = h + " : " + m + " : " + s;
}

function startWatch() {
    timer = setInterval(stopWatch, 1000);
}


function pauseWatch() {
    clearInterval(timer);
}

function resetWatch() {
    hours = 0 ;
    minutes = 0;
    seconds=  0;   
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    clearInterval(timer);
    timerDisplayer.innerHTML = h + " : " + m + " : " + s;
}