var hr = 0;
var min = 0;
var sec = 0;
var msec = 0; // Milliseconds counter
var timer = false;

function start() {
    if (!timer) { // Ensure only one timer runs at a time
        timer = true;
        stopwatch();
    }
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
}

function stopwatch() {
    if (timer) {
        msec++;
        if (msec === 100) { // 100 milliseconds = 1 second
            msec = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }

        // Update the display
        document.getElementById("hr").innerText = hr.toString().padStart(2, "0");
        document.getElementById("min").innerText = min.toString().padStart(2, "0");
        document.getElementById("sec").innerText = sec.toString().padStart(2, "0");

        // Call the stopwatch function again after 10ms
        setTimeout(stopwatch, 10);
    }
}
