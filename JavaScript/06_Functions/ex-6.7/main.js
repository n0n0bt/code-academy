let startValue = 10;

function countdown(countdownValue) {

    console.log(countdownValue);

    if (countdownValue < 1) {
        return;
    } else {
        countdown(--countdownValue); // or (countdownValue - 1)
    }
}

countdown(startValue); 