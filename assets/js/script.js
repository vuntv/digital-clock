const daysOfWeek = [
    'sun', 'mon', 'tue',
    'wed', 'thu', 'fri',
    'sat'
];

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2, '0');

function clock() {
    const toDate = new Date();

    const hour = toDate.getHours();
    const minute = toDate.getMinutes();
    const second = toDate.getSeconds();
    const am_pm = hour < 11 ? 'AM' : 'PM';

    const day = toDate.getDay();

    const date = toDate.getDate();
    const month = toDate.getMonth();
    const year = toDate.getFullYear();

    $('hours').innerText= zeroPadding(hour);
    $('minutes').innerText = zeroPadding(minute);
    $('seconds').innerText = zeroPadding(second);
    $('ampm').innerText = am_pm;

    $('date').innerHTML = zeroPadding(date);
    $('month').innerHTML = months[ month ];
    $('year').innerHTML = year;

    $(daysOfWeek[day]).classList.add('active');
    // console.log(daysOfWeek[day]);
}

setInterval(clock, 1000);