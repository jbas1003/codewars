function gravity_shift(shift) {
    let input = document.getElementById('numbers').value;
    const number = input.split("");

    if (shift == "left") {
        number.sort(function (a, b) { return b - a });
        document.getElementById('output').innerHTML = number;
    } if (shift == "right") {
        number.sort(function (a, b) { return a - b });
        document.getElementById('output').innerHTML = number;
    }
}