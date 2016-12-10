window.onload = function() {
    var hour_arr = document.querySelector('.arr:nth-of-type(1)'),
        min_arr = document.querySelector('.arr:nth-of-type(2)'),
        sec_arr = document.querySelector('.arr:nth-of-type(3)');
        
    var time = new Date();
    var hour, min, sec;

    parseTime();
        hour_arr.style.transform = `rotate(${90 + 30 * hour}deg)`;
        min_arr.style.transform = `rotate(${90 + 6 * min}deg)`;
        sec_arr.style.transform = `rotate(${90 + 6 * sec}deg)`;

        
    setInterval(function() {
        tick();
    }, 1000);

    function tick() {
        time = new Date();
        parseTime();
        hour_arr.style.transform = `rotate(${90 + 30 * hour}deg)`;
        min_arr.style.transform = `rotate(${90 + 6 * min}deg)`;
        sec_arr.style.transform = `rotate(${90 + 6 * sec}deg)`;
    };

    function parseTime() {
        hour = time.getHours();
        min = time.getMinutes();
        sec = time.getSeconds() < 60 ? time.getSeconds() : 0;
    }
};