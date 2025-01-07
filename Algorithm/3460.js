// 이진수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
let result = [];

const num = input[0];

for (let i = 0; i < num; i++) {
    const binary = input[i].toString(2).split().reverse();
    console.log(binary);
}

// 계속 ~