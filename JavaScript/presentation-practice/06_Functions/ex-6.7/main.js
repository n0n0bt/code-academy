let start = 10;

function countdown(value) {
    console.log(value);

    if (value < 1) {
        return;
    } else if (value >= 1) {
    countdown(--value);
    }
}

countdown(start);