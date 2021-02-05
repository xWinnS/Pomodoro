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

const time_p = document.querySelector('.time');
let temporizador;
let T = new Date();
let tempo_base = 2500;


const startPause = document.querySelector('.pause');
startPause.addEventListener("click", toggleStart);

function toggleStart(){
    if(startPause.innerHTML == "START"){
        startPause.innerHTML = "PAUSE";
        startTemporizador();
    }else if(startPause.innerHTML == "PAUSE"){
        startPause.innerHTML = "START";
        pauseTemporizador();
    }
}

function startTemporizador(){
    temporizador = setInterval(temporizadorMath, 1000);
}

function pauseTemporizador() {
    clearInterval(temporizador);
}

function temporizadorMath() {
    let time = time_p.innerHTML;
    let minutes = time.slice(0,2);
    let seconds = time.slice(3,6);
    if(minutes == "00" && seconds == "00"){
        pauseTemporizador();
        
    }
    T.setMinutes(minutes);
    T.setSeconds(seconds);
    T.setSeconds(T.getSeconds()-1);
    let minute = addZero(T.getMinutes());
    let second = addZero(T.getSeconds());
    time_p.innerHTML = minute + ":" + second;
    progressCircle(minute, second);
}

function progressCircle(minute, second){
    let minutes = String(minute);
    let seconds = String(second);
    let time_number = parseInt(minutes+seconds);
    // console.log(time_number);
    let tempo_fator = ((time_number * 100)/tempo_base);
    // console.log(tempo_fator);
    setProgress(tempo_fator);
}

function addZero(times){
    if (times < 10) {
        times = "0" + times;
      }
      return times;
}

/* ------------------- */

const pomodoro = document.getElementById('pomodoro');
const short_break = document.getElementById('short_break');
const long_break = document.getElementById('long_break');


pomodoro.addEventListener("click", function(){
    time_p.innerHTML = "25:00";
    tempo_base = 2500;
    pomodoro.classList.add('selecionada');
    short_break.classList.remove('selecionada');
    long_break.classList.remove('selecionada');
});

short_break.addEventListener("click", function(){
    time_p.innerHTML = "05:00";
    tempo_base = 500;
    short_break.classList.add('selecionada');
    pomodoro.classList.remove('selecionada');
    long_break.classList.remove('selecionada');
});

long_break.addEventListener("click", function(){
    time_p.innerHTML = "30:00";
    tempo_base = 3000;
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
    if(minuto == 60) {
        segundo = "00";
    }
    if(minuto < 10){
        minuto = "0" + minuto;
    }
    if(segundo > 59){
        segundo =  "59";
    }
    if(segundo < 10 && segundo >= 1){
        segundo = "0" + segundo;
    }
    let time = minuto + ":" + segundo;
    time_p.innerHTML = time;
    tempo_base = minuto + segundo;
    console.log(tempo_base);
}