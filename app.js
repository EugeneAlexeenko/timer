'use strict';

function Timer() {
  var timerId,
      secondsToStop,
      currentMode;
  
  var timerWindow = document.querySelector('#timerWindow');
  var btnModePomodoro = document.querySelector('#btn-mode-pomodoro');
  var btnModeCountdown = document.querySelector('#btn-mode-countdown')
  var btnStart = document.querySelector('#btn-start');
  var btnReset = document.querySelector('#btn-reset');

  var mode = {
    pomodoro: 25,
    countdown: 60
  };
  
  this.setMode = function(newMode) {
    currentMode = newMode || "pomodoro";
    console.log(currentMode + " mode enabled");
    //this.reset();
    //showTimer();
  };
  
  this.start = function() {
    secondsToStop = mode[currentMode];
    showTimer();
    
    timerId = setInterval(function() {
      secondsToStop--;
      console.log("seconds to stop " + secondsToStop);
      showTimer();
      if (secondsToStop === 0) {
        console.log("time is over"); //todo написать реакцию
      }
    }, 1000);
  };
  
  this.reset = function() {
    clearInterval(timerId);
    secondsToStop = mode[currentMode];
    //showTimer();
    btnStart.style.display = "block";
  };
  
  this.init = function() {    
    this.setMode("pomodoro");
    console.log("current mode: " + currentMode);
    secondsToStop = mode[currentMode];
    console.log("seconds to stop: " + secondsToStop);
    //showTimer();
  };
  
  function showTimer() {
   // timerWindow.innerHTML = "20";//secondsToStop;
   console.log(timerWindow);
  }

//  btnModePomodoro.addEventListener("click", function() {
//    setMode("pomodoro");
//  });

//  btnModeCountdown.addEventListener("click", function() {
//    pomodoro.setMode("countdown");
//  });

//  btnStart.addEventListener("click", function() {
//    pomodoro.start();
//    this.style.display = "none";
//  });

//  btnReset.addEventListener("click", function() {
//    pomodoro.reset();
//    btnStart.style.display = "block";
//  });
}

var pomodoro = new Timer();
pomodoro.setMode("pomodoro");
//pomodoro.init();


