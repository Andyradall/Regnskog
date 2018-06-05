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
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// Hvor man skriver inn tallene
var deadline = new Date(Date.parse(new Date()) + 670 * 24 * 60 * 60 * 1000);
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
        $("#cf2 img.top").toggleClass("transparent");
    });
});

// Toggle leopard 
$(document).ready(function () {
    $("#cf_onclick3").click(function () {
        $("#cf3 img.top3").toggleClass("transparent");
    });
});