const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
];


const dayNames = [
    'Pn',
    'Wt',
    'Śr',
    'Cz',
    'Pt',
    'Sb',
    'Nd',
]

var events = [
    {
        year: 2023,
        month: 4,
        day: 10,
        time: '10:30',
        location: "Warszawa",
        descritpion: "Zjazd miłośników szczupaków"
    },
    {
        year: 2023,
        month: 4,
        day: 7,
        time: '12:00',
        location: "Lublin",
        descritpion: "Targi producentów żyłek"
    },
    {
        year: 2023,
        month: 4,
        day: 22,
        time: '19:00',
        location: "Zamość",
        descritpion: "Zjazd fanatyków wędkarstwa"
    },
    {
        year: 2023,
        month: 5,
        day: 17,
        time: '10:30',
        location: "Lublin",
        descritpion: "Targi producentów wędzisk"
    },
    {
        year: 2023,
        month: 6,
        day: 10,
        time: '13:30',
        location: "Poznań",
        descritpion: "Targi producentów przynęt"
    },
];



var date;

var dayOfMonth;
var currentMonth;
var month;
var year;

$(document).ready(function () {


    getCurrentDate();
    updateCalendar();
    updateCalendarTitle();
    updateEvents()
});


function getCurrentDate() {
    date = new Date();

    dayOfMonth = date.getDate();
    month = date.getMonth();
    currentMonth = month;
    year = date.getFullYear()
}

function updateCalendar() {
    var cal = document.getElementById('calendar_days');
    var numberOfDaysInCurrentMonth = new Date(year, month + 1, 0).getDate()
    var calendar = "";

    var firstDayOfWeekInMonth = new Date(year, month, 1).getDay();

    if (firstDayOfWeekInMonth == 0) {
        firstDayOfWeekInMonth = 6;
    }
    else {
        firstDayOfWeekInMonth = firstDayOfWeekInMonth - 1;
    }

    for (let i = 0; i < firstDayOfWeekInMonth; i++) {
        calendar += `<div class="day invisible"></div>`;
    }
    var weekday;
    for (let i = 0; i < numberOfDaysInCurrentMonth; i++) {
        weekday = (firstDayOfWeekInMonth + i) % 7;
        calendar += `<div class="day ${(weekday > 4 ? "weekend" : "")} ${(dayOfMonth == i + 1) && (month == currentMonth) ? "today" : ""}">
                        <div class="dayname">${dayNames[weekday]}</div>
                        <div class="daynumber ${checkIfEventPresent(year, month, i + 1) ? "eventday" : ""}">${i + 1}</div>
                    </div>`
    }
    cal.innerHTML = calendar;
}


function checkIfEventPresent(year, month, day) {
    for (let i = 0; i < events.length; i++) {
        if (events[i].year == year && events[i].month == month && events[i].day == day) {
            return true;
        }
    }
    return false;
}


function updateCalendarTitle() {
    var title = document.getElementById('calendar_nav_title');
    title.innerHTML = `${year} ${months[month]}`;
}

function previousMonth() {
    if (month == 0) {
        year--;
        month = 11;
    }
    else {
        month--;
    }
    updateCalendar();
    updateCalendarTitle();
    updateEvents()
}

function nextMonth() {
    if (month == 11) {
        year++;
        month = 0;
    }
    else {
        month++;
    }
    updateCalendar();
    updateCalendarTitle();
    updateEvents()
}


function updateEvents() {
    var ev = document.getElementById('events');
    var eventsInMonth = [];
    for (let i = 0; i < events.length; i++) {
        if (events[i].month == month && events[i].year == year) {
            eventsInMonth.push(events[i]);
        }
    }

    var eventsElements = "";
    for (let i = 0; i < eventsInMonth.length; i++) {
        eventsElements +=
            `<div class="event">
                <img src="img\\sea-fish-drawing.png" class="event_fish">
                <div>
                    <b>${eventsInMonth[i].day} ${months[month].toLowerCase()} ${year}</b>
                    - <u>${eventsInMonth[i].location}</u>
                    <b>${eventsInMonth[i].time}</b>
                    - ${eventsInMonth[i].descritpion}
                </div>
            </div>`
    }
    ev.innerHTML = eventsElements;
}