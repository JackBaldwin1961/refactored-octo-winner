let toxinLevels = [2.5, 3.1, 4.8, 5.0, 3.6];

function calculateMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let mean = calculateMean(toxinLevels);
let roundedMean = Math.round(mean * 100) / 100;
let message = ("The average toxin level is: " + roundedMean);
console.log(message);