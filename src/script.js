const hoursUserInput = prompt('Please set number of hours to be converted to seconds');

function convertToSeconds(hours) {
    const hoursConverted = hours * 3600;
    return hoursConverted;
}

const message = `There are ${convertToSeconds(hoursUserInput)} seconds in ${hoursUserInput} hours`;

alert(message);
