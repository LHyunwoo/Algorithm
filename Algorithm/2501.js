const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let inputSplit = input[0].split(' ');
let numList = [];

for (let i = 1; i <= inputSplit[0]; i++) {
    if (inputSplit[0] % i === 0) {
        numList.push(i);
    }
}

if (numList.length > 0) {
    console.log(numList[inputSplit[1] - 1] ? numList[inputSplit[1] - 1] : 0);
}

