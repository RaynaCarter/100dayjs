
const countTo = "1 Jan 2027";
// 
const c = setInterval(() => {
    const endDate = new Date(countTo);
    // ensures that the end date is a date object 
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) /1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) %  60;
    const sec = Math.floor(totalSeconds) % 60;

    const countDown = document.getElementById("countdown")

    countDown.textContent = `${days}:${format(hours)}:${format(mins)}:${format(sec)}`;

    if(totalSeconds < 0) {
        clearInterval(c);
        countDown.textContent = "Happy New Year!!!";
    }
}, 1000);

function format(t) {
    return t < 10 ? `0${t}` : t;
}

