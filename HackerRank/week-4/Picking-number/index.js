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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Create a frequency array to count the occurrences of each number
  let freq = new Array(101).fill(0);

  // Populate the frequency array
  for (let num of a) {
    freq[num]++;
  }

  let maxLen = 0;

  // Find the maximum length of a subarray where the absolute difference between
  // any two elements is less than 2
  for (let i = 1; i < 101; i++) {
    maxLen = Math.max(maxLen, freq[i] + freq[i - 1]);
  }

  return maxLen;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
