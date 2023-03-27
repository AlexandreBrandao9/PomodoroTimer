// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js')
//         .then(registration => {
//             console.log('Service Worker registered: ', registration);
//         })
//         .catch(error => {
//             console.error('Service Worker registration failed: ', error);
//         });
// }





// if (Notification.permission !== 'granted') {
//     Notification.requestPermission().then(permission => {
//         if (permission === 'granted') {
//             console.log('Notification permission granted');
//         } else {
//             console.warn('Notification permission not granted');
//         }
//     });
// }





// navigator.serviceWorker.ready.then(registration => {
//     registration.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: yourPublicKey
//     }).then(subscription => {
//         console.log('Push subscription successful: ', subscription);
//     }).catch(error => {
//         console.error('Push subscription failed: ', error);
//     });
// });





// navigator.serviceWorker.ready.then(registration => {
//     registration.showNotification('Hello world!', {
//         body: 'This is a push notification',
//         icon: 'path/to/icon.png',
//         tag: 'my-tag'
//     });
// });









let pomodoroTimerBtn = document.querySelector("#pomodoro-timer")
let shortBreakTimerBtn = document.querySelector("#short-break-timer")
let longBreakTimerBtn = document.querySelector("#long-break-timer")

let progressBar = document.querySelector("#progress-bar")
let progressBarFilling = document.querySelector("#progress")

let pomodoroSubtitle = document.querySelector("#pomodoro-subtitle")

let allTimerBtns = document.querySelector(".timer-mode")


let timerCounter = document.querySelector("#pomodoro-timer-counter")


let startCounterBtn = document.querySelector("#start-counter-btn")







pomodoroTimerBtn.style.opacity = "100%"


pomodoroTimerBtn.addEventListener("click", () => {
    pomodoroTimerBtn.style.opacity = "100%"
    shortBreakTimerBtn.style.opacity = "30%"
    longBreakTimerBtn.style.opacity = "30%"
})


shortBreakTimerBtn.addEventListener("click", () => {
    pomodoroTimerBtn.style.opacity = "30%"
    shortBreakTimerBtn.style.opacity = "100%"
    longBreakTimerBtn.style.opacity = "30%"
})


longBreakTimerBtn.addEventListener("click", () => {
    pomodoroTimerBtn.style.opacity = "30%"
    shortBreakTimerBtn.style.opacity = "30%"
    longBreakTimerBtn.style.opacity = "100%"
})







startCounterBtn.addEventListener("click", () => {
    startCounterBtn.style.opacity = "100%"
})







/* funcao para aumentar a barra de progresso */

let timeLimit = 25 * 60; // 25 minutes in seconds
let timePassed = 0;
let progressPercent = 0;
let interval;

function toggleTimer() {
    if (!interval) {
        interval = setInterval(() => {
        timePassed++;
        progressPercent = (timePassed / timeLimit) * 100;
        progressBarFilling.style.width = `${progressPercent}%`;

        if (timePassed >= timeLimit) {
        clearInterval(interval);

        // sitio para meter açoes quando o timer acaba

        }
    }, 1000);
    } else {
    clearInterval(interval);
    interval = null;
    }
}

function resetProgress() {
    clearInterval(interval);
    interval = null;
    timePassed = 0;
    progressPercent = 0;
    progressBarFilling.style.width = '0%';
}










/* click no botao pomodoro para aspeto azul */

pomodoroTimerBtn.addEventListener("click", () => {
    document.title = "25:00 - Pomodoro Timer"
    document.body.style.transition = "all 0.3s ease-in-out"
    document.body.style.backgroundColor = "#31356d"


    /* mudança de cor da progress bar e subtitle */ 

    progressBar.style.transition = "all 0.3s ease-in-out"
    progressBar.style.backgroundColor = "#1f2244"

    pomodoroSubtitle.style.transition = "all 0.3s ease-in-out"
    pomodoroSubtitle.style.color = "#98c3e6"



    /* set de cores default para cada ambiente de cor */
    
    allTimerBtns.style.transition = "all 0.3s ease-in-out"
    pomodoroTimerBtn.style.backgroundColor = "#31356d"
    shortBreakTimerBtn.style.backgroundColor = "#31356d"
    longBreakTimerBtn.style.backgroundColor = "#31356d"




    /* mudar tempo de contagem no click */

    timerCounter.style.transition = "all 0.2s ease-in-out"
    timerCounter.innerHTML = "25:00"



    /* resetar botao de star quando mudar de ambiente */

    if (btnMarginTop) {
        startCounterBtn.style.marginTop = "0px"
        btnMarginTop = false;
        startCounterBtn.innerHTML = "COMEÇAR"
    } 


})








/* click no botao short break para aspeto amarelo */

shortBreakTimerBtn.addEventListener("click", () => {
    document.title = "5:00 - Short Break"
    document.body.style.transition = "all 0.3s ease-in-out"
    document.body.style.backgroundColor = "#7d7141"


    /* mudança de cor da progress bar e subtitle */ 

    progressBar.style.transition = "all 0.3s ease-in-out"
    progressBar.style.backgroundColor = "#4f451b"

    pomodoroSubtitle.style.transition = "all 0.3s ease-in-out"
    pomodoroSubtitle.style.color = "#f0df95"



    /* set de cores default para cada ambiente de cor */

    allTimerBtns.style.transition = "all 0.3s ease-in-out"
    pomodoroTimerBtn.style.backgroundColor = "#7d7141"
    shortBreakTimerBtn.style.backgroundColor = "#7d7141"
    longBreakTimerBtn.style.backgroundColor = "#7d7141"


    /* mudar tempo de contagem no click */

    timerCounter.innerHTML = "5:00"




    /* resetar botao de star quando mudar de ambiente */

    if (btnMarginTop) {
        startCounterBtn.style.marginTop = "0px"
        btnMarginTop = false;
        startCounterBtn.innerHTML = "COMEÇAR"
    } 

})








/* click no botao long break para aspeto rosa */

longBreakTimerBtn.addEventListener("click", () => {
    document.title = "15:00 - Long Break"
    document.body.style.transition = "all 0.3s ease-in-out"
    document.body.style.backgroundColor = "#6e264f"


    /* mudança de cor da progress bar e subtitle */ 

    progressBar.style.transition = "all 0.3s ease-in-out"
    progressBar.style.backgroundColor = "#40142d"
    
    pomodoroSubtitle.style.transition = "all 0.3s ease-in-out"
    pomodoroSubtitle.style.color = "#fc8bd4"




    /* set de cores default para cada ambiente de cor */

    allTimerBtns.style.transition = "all 0.3s ease-in-out"
    pomodoroTimerBtn.style.backgroundColor = "#6e264f"
    shortBreakTimerBtn.style.backgroundColor = "#6e264f"
    longBreakTimerBtn.style.backgroundColor = "#6e264f"



    /* mudar tempo de contagem no click */

    timerCounter.innerHTML = "15:00"




    /* resetar botao de star quando mudar de ambiente */

    if (btnMarginTop) {
        startCounterBtn.style.marginTop = "0px"
        btnMarginTop = false;
        startCounterBtn.innerHTML = "COMEÇAR"
    } 

})







/* transiçao de box shadow do botao start */


let btnMarginTop = false;

startCounterBtn.addEventListener("click", () => {

    toggleTimer()


    if (btnMarginTop) {
        startCounterBtn.style.marginTop = "0px"
        btnMarginTop = false;
        startCounterBtn.innerHTML = "COMEÇAR"
    } else {
        startCounterBtn.style.marginTop = "8px"
        btnMarginTop = true;
        startCounterBtn.innerHTML = "PARAR"
    }


})







/* default timer */


const timerDisplay = document.getElementById('pomodoro-timer-counter');



let timer = 25 * 60;
let countdown;
let pausedTime;

function startTimer() {
    countdown = setInterval(() => {
    timer--;

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    document.title = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} - Pomodoro Timer`;

    if (timer === 0) {
        clearInterval(countdown);
    }
    }, 1000);
}




/* o que acontece no click do botao start e stop */


startCounterBtn.addEventListener('click', () => {
    if (countdown) {
    clearInterval(countdown);
    countdown = null;
    pausedTime = timer;
    } else {
    if (pausedTime) {
        timer = pausedTime;
        pausedTime = null;
    } else {
      timer = 25 * 60;
    }
    startTimer();
    }
});







pomodoroTimerBtn.addEventListener('click', () => {

    clearInterval(countdown);
    timer = 25 * 60
    pausedTime = timer;

    startCounterBtn.addEventListener('click', () => {
        if (countdown) {
        clearInterval(countdown);
        countdown = null;
        pausedTime = timer;
        } else {
        if (pausedTime) {
            timer = pausedTime;
            pausedTime = null;
        } else {
          timer = 25 * 60;
        }
        startTimer();
        }
    });

})









shortBreakTimerBtn.addEventListener("click", () => {
    
    clearInterval(countdown);
    timer = 5 * 60
    pausedTime = timer;

    startCounterBtn.addEventListener('click', () => {
        if (countdown) {
        clearInterval(countdown);
        countdown = null;
        pausedTime = timer;
        } else {
        if (pausedTime) {
            timer = pausedTime;
            pausedTime = null;
        } else {
          timer = 5 * 60;
        }
        startTimer();
        }
    });

})








longBreakTimerBtn.addEventListener("click", () => {
    
    clearInterval(countdown);
    timer = 15 * 60
    pausedTime = timer;

    startCounterBtn.addEventListener('click', () => {
        if (countdown) {
        clearInterval(countdown);
        countdown = null;
        pausedTime = timer;
        } else {
        if (pausedTime) {
            timer = pausedTime;
            pausedTime = null;
        } else {
          timer = 15 * 60;
        }
        startTimer();
        }
    });

})







pomodoroTimerBtn.addEventListener("click", () => {
    resetProgress()
})



shortBreakTimerBtn.addEventListener("click", () => {
    resetProgress()
})


longBreakTimerBtn.addEventListener("click", () => {
    resetProgress()
})










pomodoroTimerBtn.addEventListener("click", () => {
    startCounterBtn.addEventListener("click", () => {
        timeLimit = 25 * 60;

        toggleTimer()
    })
})





shortBreakTimerBtn.addEventListener("click", () => {
    startCounterBtn.addEventListener("click", () => {
        timeLimit = 5 * 60;

        toggleTimer()
    })
})





longBreakTimerBtn.addEventListener("click", () => {
    startCounterBtn.addEventListener("click", () => {
        timeLimit = 15 * 60;

        toggleTimer()
    })
})









