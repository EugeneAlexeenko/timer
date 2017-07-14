'use strict';

function Timer() {
  var timerId,
      secondsToStop,
      currentMode;
  
  var timerWindow       = document.querySelector('#timer-window'),
      btnModePomodoro   = document.querySelector('#btn-mode-pomodoro'),
      btnModeShortBreak = document.querySelector('#btn-mode-shortbreak'),
      btnModeLongBreak  = document.querySelector('#btn-mode-longbreak'),
      btnStart          = document.querySelector('#btn-start'),
      btnReset          = document.querySelector('#btn-reset');

//sets modes in minutes
  var mode = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10
  };
  
  function setMode(newMode) {
    currentMode = newMode || "pomodoro";
    reset();
    showTimer();
  };
  
  function start() {
    secondsToStop = mode[currentMode];
    showTimer();
    btnStart.style.display = "none";
    btnReset.style.display = "block";
    
    timerId = setInterval(function() {
      secondsToStop--;
      console.log("seconds to stop " + secondsToStop);
      showTimer();
      if (secondsToStop === 0) {
        reset();//временное решение
      }
    }, 1000);
  };
  
  function reset() {
    clearInterval(timerId);
    secondsToStop = mode[currentMode];
    showTimer();
    btnStart.style.display = "block";
    btnReset.style.display = "none";
  };
  
  this.init = function() {
    setMode("pomodoro");
    secondsToStop = mode[currentMode];
    showTimer();
    btnReset.style.display = "none";
  };
  
   function showTimer() {
     timerWindow.innerHTML = secondsToStop;
  }

  btnModeShortBreak.addEventListener("click", function() {
    setMode("shortBreak");
  });

  btnModePomodoro.addEventListener("click", function() {
    setMode("pomodoro");
  });

  btnModeLongBreak.addEventListener("click", function() {
    setMode("longBreak");
  });

  btnStart.addEventListener("click", function() {
    start();
  });

  btnReset.addEventListener("click", function() {
    reset();
  });
}


var pomodoro = new Timer();
pomodoro.init();


