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

const startPause = document.querySelector('.pause');
startPause.addEventListener("click", toggleStart);

function toggleStart(){
    if(startPause.innerHTML == "START"){
        startPause.innerHTML = "PAUSE";
        startTime();
    }else if(startPause.innerHTML == "PAUSE"){
        startPause.innerHTML = "START";
        pauseTime();
    }
}

function startTime() {

}

function pauseTime() {
    
}


/* ------------------- */

const pomodoro = document.getElementById('pomodoro');
const short_break = document.getElementById('short_break');
const long_break = document.getElementById('long_break');
const time_p = document.querySelector('.time');

pomodoro.addEventListener("click", function(){
    time_p.innerHTML = "25:00";
    pomodoro.classList.add('selecionada');
    short_break.classList.remove('selecionada');
    long_break.classList.remove('selecionada');
});

short_break.addEventListener("click", function(){
    time_p.innerHTML = "05:00";
    short_break.classList.add('selecionada');
    pomodoro.classList.remove('selecionada');
    long_break.classList.remove('selecionada');
});

long_break.addEventListener("click", function(){
    time_p.innerHTML = "30:00";
    long_break.classList.add('selecionada');
    pomodoro.classList.remove('selecionada');
    short_break.classList.remove('selecionada');
});



const config = document.querySelector('.config');
const config_background = document.querySelector('.config_background');
const btn = document.querySelector('.btn_ok');
const gear = document.querySelector('.gear');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');


config_background.addEventListener("click",function(){
    config.classList.toggle("hidden");
});

btn.addEventListener("click",function(){
    config.classList.toggle("hidden");
    alteraTempo();
});

gear.addEventListener("click",function(){
    config.classList.toggle("hidden");
});

function alteraTempo(){
    let minuto = minutos.value;
    let segundo = segundos.value;
    if(minuto > 60){
        minuto = "60";
    }
    if(segundo > 59){
        segundo =  "59";
    }
    if(minuto == 60) {
        segundo = "00";
    }
    let time = minuto + ":" + segundo;
    time_p.innerHTML = time;
}