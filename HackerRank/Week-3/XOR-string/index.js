process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    input = input.trim().split('\n');
    let a = input[0];
    let b = input[1];
    console.log(strings_xor(a, b));
});

function strings_xor(a, b) {
    let val = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {  // Changed condition from a[i] > b[i] || b[i] > a[i] to a[i] !== b[i]
            val.push("1");
        } else {
            val.push('0');
        }
    }
    return val.join("");  // Ensure the return value is correctly formed
}
