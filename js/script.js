const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(100);




/* ------------------- */

const pomodoro = document.getElementById('pomodoro');
const short_break = document.getElementById('short_break');
const long_break = document.getElementById('long_break');
const time_p = document.querySelector('.time');

pomodoro.addEventListener("click", function(){
    time_p.innerHTML = "25:00";
    pomodoro.style.backgroundColor = "#F87073";
    pomodoro.style.color = "#212645";
});

short_break.addEventListener("click", function(){
    time_p.innerHTML = "05:00";
    short_break.style.backgroundColor = "#F87073";
    short_break.style.color = "#212645";
});



const config = document.querySelector('.config');
const btn = document.querySelector('.btn_ok');
const gear = document.querySelector('.gear');

btn.addEventListener("click",function(){
    config.classList.toggle("hidden");
});

gear.addEventListener("click",function(){
    config.classList.toggle("hidden");
});