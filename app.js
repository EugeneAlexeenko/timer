'use strict';

function Timer() {
  var timerId,
      secondsToStop,
      currentMode,
      isRunning;
  
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
    if (isRunning === true) return;
    isRunning = true;
    convertMinToSec();
    showTimer();
    btnStart.style.display = "none";
    btnReset.style.display = "block";
    
    timerId = setInterval(function() {
      secondsToStop--;
      showTimer();
      if (secondsToStop === 0) {
        reset();//временное решение
      }
    }, 1000);
  };
  
  function reset() {
    isRunning = false;
    clearInterval(timerId);
    convertMinToSec();
    showTimer();
    btnStart.style.display = "block";
    btnReset.style.display = "none";
  };
  
  this.init = function() {
    isRunning = false;
    setMode("pomodoro");
    convertMinToSec();
    showTimer();
    btnReset.style.display = "none";
  };
  
  function showTimer() {
     timerWindow.innerHTML = prepareOutput(secondsToStop);
  }

  function convertMinToSec() {
    secondsToStop = mode[currentMode] * 60;
  }

  function prepareOutput(secondsToStop) {
    var min = Math.floor(secondsToStop / 60);
    var sec = secondsToStop % 60;
    function formatZero(num) {
      if (num < 10) {
        return "0" + num;
      }
      return num;
    }
    return formatZero(min) + " : " + formatZero(sec);
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

  document.onkeydown = function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 83: {
        btnModeShortBreak.click(); // s
        break;
      }
      case 80: {
        btnModePomodoro.click(); // p
        break;
      }
      case 76: {
        btnModeLongBreak.click(); // l
        break;
      }
      case 32: {
        start();
        break;
      }
      case 27: {
        reset();
        break;
      }
    }
  }

}


var pomodoro = new Timer();
pomodoro.init();


