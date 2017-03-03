$(document).ready(function() {
  // variables
  var Pomodoro = 25,
    Break = 5,
    startClock = false,
    currentTime, pauseClock = false,
    breakB = false,
    pomoB = true;
  var audio = $("audio")[0];

  $("#breaktimer").hide();
  $("#reset").hide();
  //Functions

  var TimeP = document.getElementById('pomodoro');
  TimeP.innerHTML = Pomodoro;
  var TimeB = document.getElementById('break');
  TimeB.innerHTML = Break;

  $("#minusP").click(function() {

    if (Pomodoro > 1) {
      Pomodoro--;
      TimeP.innerHTML = Pomodoro;
    } else {

    }
  })

  $("#plusP").click(function() {
    Pomodoro++;
    TimeP.innerHTML = Pomodoro;

  })

  $("#minusB").click(function() {
    if (Break > 1) {
      Break--;
      TimeB.innerHTML = Break;
    } else {}

  })

  $("#plusB").click(function() {

    if (Break >= 1 && Break < 10) {
      Break++;
      TimeB.innerHTML = Break;
    } else {

    }
  })

  //Button click functionality

  $("#start").click(function() {
    $("#reset").show();

    if (pomoB) {
      var count = Pomodoro * 60;
    } else if (!pomoB) {
      count = Break * 60;
    }

    var countClock = setInterval(countDownTimer, 1000);

    function countDownTimer() {
      count -= 1;
      var minutes = Math.floor(count / 60);
      var seconds = Math.floor(count % 60);

      if (count <= 0) {

        clearInterval(countClock);
        $("#timeBlock").hide();

        audio.play();
      } else if (count === 0) {

      } else if (count > 0) {

        $("#timeBlock").html("Time remaining: " + ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2));
      }

    }

    $(".functionalButtons, .timers, #start").hide();
    $("#reset").addClass("btn-primary");

    function resetTimer() {
      $(".functionalButtons, .timers, #start").show();
      $("#reset").removeClass("btn-primary");
      $("#timeBlock").hide();
      $("#timeBlock").html(" ");
      clearInterval(countClock);
      $("#reset").hide();
      count = 0;

    }

    $("#reset").click(function() {

      resetTimer();

    })
    $("#timeBlock").show();

  })

  $("#pomoTime").click(function() {
    $("#breakTime").removeClass("btn-primary");
    $("#pomoTime").addClass("btn-primary");
    $("#breaktimer").hide();
    $("#pomodorotimer").show();
    pomoB = true;
    breakB = false;
  })

  $("#breakTime").click(function() {
    $("#pomoTime").removeClass("btn-primary");
    $("#breakTime").addClass("btn-primary");
    $("#pomodorotimer").hide();
    $("#breaktimer").show();
    breakB = true;
    pomoB = false;
  })

});