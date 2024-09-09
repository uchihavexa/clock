const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.querySelector('.digital-clock');
const analogClock = document.querySelector('.analog-clock');
const toggleBtn = document.getElementById('toggleBtn');

function setAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleClock() {
    if (analogClock.style.display === 'none') {
        analogClock.style.display = 'block';
        digitalClock.style.display = 'none';
        toggleBtn.textContent = 'Switch to Digital';
    } else {
        analogClock.style.display = 'none';
        digitalClock.style.display = 'block';
        toggleBtn.textContent = 'Switch to Analog';
    }
}

setInterval(() => {
    setAnalogClock();
    setDigitalClock();
}, 1000);

toggleBtn.addEventListener('click', toggleClock);
