function processData(input) {
  function findZigZagSequence(arr) {
     let ar = [];
     let len = arr.length;
     if (len % 2 === 1) {
        ar = arr.slice(0, Math.floor(len / 2));
        ar.push(Math.max(...arr));
        ar.push(...arr.slice(Math.floor(len / 2) + 1).sort((a, b) => b - a)); // Change here
     } else {
        ar = arr.slice(0, len / 2);
        ar.push(...arr.slice(-(len / 2)).sort((a, b) => b - a)); // Change here
     }
     return ar;
  }

  input = input.trim().split('\n');
  let t = parseInt(input[0]);
  let index = 1;
  while (t--) {
     let n = parseInt(input[index++]);
     let arr = input[index++].trim().split(' ').map(Number);
     let result = findZigZagSequence(arr);
     console.log(result.join(' '));
  }
}
