'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    if(s.includes("A")){
        if(s.slice(0, 2) === '12'){
            return `00:${s.substr(3, 5)}`
        }
        return s.substr(0, 8)
    }else {
        let hour = parseInt(s.substr(0, 2))
        if(hour === 12){
            return s.substr(0, 8)
        }
        return `${hour + 12}:${s.substr(3, 5)}`
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
