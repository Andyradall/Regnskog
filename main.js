//Nedtelling øverst på siden
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            document.getElementById("clockdiv").innerHTML = "Det er for seint";
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// Hvor man skriver inn tallene
var deadline = '2020-01-01T00:00:01+00:00';
initializeClock('clockdiv', deadline);


//Nedtelling fotballbaner
setTimeout(start, 5);

var i = 1;
var num = document.getElementById('number');

function start() {
    setInterval(increase, 5000);
}

function increase() {
    if (i < 1000) {
        i++;
        num.innerText = i;
    }
}


// Toggle ape

$(document).ready(function () {
    $("#cf_onclick").click(function () {
        var $this = $(this);
        $("#cf2 img.top").toggleClass("transparent");
        $("#cf_onclick").html("Klikk her og se fasaden");

        $this.toggleClass("change");
      
        if ($this.hasClass("change")) {
            $this.html("Klikk her og se fasaden");
        } else {
            $this.html("Klikk her og se sannheten");
        }
    });
});

// Toggle leopard 
$(document).ready(function () {
    $("#cf_onclick3").click(function () {
        var $this = $(this);
        $("#cf3 img.top3").toggleClass("transparent");
        $("#cf_onclick3").html("Klikk her og se fasaden");

        $this.toggleClass("change");
        
        if ($this.hasClass("change")) {
            $this.html("Klikk her og se fasaden");
        } else {
            $this.html("Klikk her og se sannheten");
        }
    });
});

