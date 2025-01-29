const soat = document.getElementById('clock');
const sana = document.getElementById('date');

const alarmsList = document.getElementById('alarmsList');
const addAlarmBtn = document.getElementById('addAlarmBtn');
const clearAlarmsBtn = document.getElementById('clearAlarmsBtn');
const alarmSound = document.getElementById('alarmSound');

const alarmModal = document.getElementById('alarmModal');
const alarmTimeInput = document.getElementById('alarmTimeInput');
const saveAlarmBtn = document.getElementById('saveAlarmBtn');
const closeModal = document.querySelector('.close');


const navButtons = document.querySelectorAll('.nav .tooltip'); 
const contentDivs = document.querySelectorAll('.content > div');


const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

const alarms = [];
let stopwatchInterval; 
let elapsedTime = 0; 


function updateClock() {
    const now = new Date();
    soat.textContent = now.toLocaleTimeString();
    sana.textContent = now.toLocaleDateString();
}

setInterval(updateClock, 1000);
updateClock();





function renderAlarms() {
    alarmsList.innerHTML = '';

    alarms.forEach((alarm, index) => {
        const now = new Date();
        const alarmTime = new Date(now.toDateString() + ' ' + alarm.time);
        let timeLeft = (alarmTime - now) / 1000;

        if (timeLeft < 0) {
            alarmTime.setDate(alarmTime.getDate() + 1);
            timeLeft = (alarmTime - now) / 1000;           
        }

        if (alarm.enabled && timeLeft <= 0) {
            alarm.enabled = false; 
            alarmSound.play().catch((error) => console.error('Audio error:', error)); // Play alarm sound
            alert('Time is up!');
            timeLeft = 0;
        }

        const hoursLeft = Math.floor(timeLeft / 3600);
        const minutesLeft = Math.floor((timeLeft % 3600) / 60);
        const secondsLeft = Math.floor(timeLeft % 60);

        const alarmDiv = document.createElement('div');
        alarmDiv.className = 'alarm';

        const alarmInfo = alarm.enabled
            ? `Qoldiq vaqt: ${hoursLeft} Soat ${minutesLeft} minut ${secondsLeft} sekund`
            : 'Faol emas';

        alarmDiv.innerHTML = `
            <div>
                <div class="alarm-time">${alarm.time}</div>
                <div class="alarm-info">${alarmInfo}</div>
            </div>
            <label class="switch">
                <input type="checkbox" ${alarm.enabled ? 'checked' : ''} ${timeLeft <= 0 ? 'disabled' : ''} onchange="toggleAlarm(${index})">
                <span class="slider"></span>
            </label>
        `;

        alarmsList.appendChild(alarmDiv);
    });
}

function startAlarmCheck() {
    setInterval(() => {   
        renderAlarms();
    }, 1000);

}

window.toggleAlarm = function (index) {
    alarms[index].enabled = !alarms[index].enabled;
    renderAlarms();
};


addAlarmBtn.onclick = () => {
    alarmModal.style.display = 'flex';
};

closeModal.onclick = () => {
    alarmModal.style.display = 'none';
    alarmTimeInput.value = ''; 
};
saveAlarmBtn.onclick = () => {
    const alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        alarms.push({ time: alarmTime, enabled: false });
        renderAlarms();
        alarmModal.style.display = 'none'; 
        alarmTimeInput.value = ''; 
    } else {
        alert('Please enter a valid time.');
    }
};

window.onclick = (event) => {
    if (event.target === alarmModal) {
        alarmModal.style.display = 'none';
        alarmTimeInput.value = ''; 
    }
};

clearAlarmsBtn.onclick = () => {
    alarms.length = 0;
    renderAlarms();
};

renderAlarms();
startAlarmCheck();





navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
       
        navButtons.forEach((btn) => btn.classList.remove('active'));
        contentDivs.forEach((div) => div.classList.remove('active'));
        button.classList.add('active');
        contentDivs[index].classList.add('active');
    });
});





function updateStopwatchDisplay() {
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.onclick = () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            updateStopwatchDisplay();
        }, 1000);
        startBtn.disabled = true; 
    }
};

stopBtn.onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null; 
    startBtn.disabled = false;
};

resetBtn.onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null; 
    elapsedTime = 0; 
    updateStopwatchDisplay();
    startBtn.disabled = false; 
};

updateStopwatchDisplay();

