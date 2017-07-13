'use strict';

function Timer() {
  var timerId,
      secondsToStop,
      currentMode;
  
  var timerWindow      = document.querySelector('#timer-window'),
      btnModePomodoro  = document.querySelector('#btn-mode-pomodoro'),
      btnModeCountdown = document.querySelector('#btn-mode-countdown'),
      btnStart         = document.querySelector('#btn-start'),
      btnReset         = document.querySelector('#btn-reset');

  var mode = {
    pomodoro: 25,
    countdown: 60
  };
  
  function setMode(newMode) {
    currentMode = newMode || "pomodoro";
    reset();
    showTimer();
  };
  
  function start() {
    secondsToStop = mode[currentMode];
    showTimer();
    
    timerId = setInterval(function() {
      secondsToStop--;
      console.log("seconds to stop " + secondsToStop);
      showTimer();
      if (secondsToStop === 0) {
        console.log("time is over"); //todo написать реакцию
        reset();//временное решение
      }
    }, 1000);
  };
  
  function reset() {
    clearInterval(timerId);
    secondsToStop = mode[currentMode];
    showTimer();
    btnStart.style.display = "block";
  };
  
  this.init = function() {
    setMode("pomodoro");
    secondsToStop = mode[currentMode];
    showTimer();
  };
  
   function showTimer() {
     timerWindow.innerHTML = secondsToStop;
  }

  btnModePomodoro.addEventListener("click", function() {
    setMode("pomodoro");
  });

  btnModeCountdown.addEventListener("click", function() {
    setMode("countdown");
  });

  btnStart.addEventListener("click", function() {
    start();
    this.style.display = "none";
  });

  btnReset.addEventListener("click", function() {
    reset();
    btnStart.style.display = "block";
  });
}


var pomodoro = new Timer();
pomodoro.init();


