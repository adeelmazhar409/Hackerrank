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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(arr) {
    let maxarr = []
    let sticks = arr.sort((a,b)=> b-a)
    let r = 3
    for(let i = 0; i < sticks.length; i++){
        let sub = sticks.slice(i, r)
        r++
        if(sub[0]+sub[1]>sub[2] && sub[1]+sub[2]>sub[0] && sub[2]+sub[0]>sub[1]){
           maxarr.push([sub[2],sub[1],sub[0]]) 
        }
    }
    
    let maxval = maxarr.map((e)=> e.reduce((a,e) => a+e,0))
    let max = Math.max(...maxval)
    return maxval.length>0 ? maxarr[maxval.indexOf(max)] : [-1]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const sticks = readLine().replace(/\s+$/g, '').split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    const result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
 
