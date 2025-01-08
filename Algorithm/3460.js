// 이진수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const num = input[0];

for (let i = 1; i <= num; i++) {
    const binary = input[i].toString(2);
    const binaryArr = [...binary].reverse();

    let ans = [];

    for (let j = 0; j < binaryArr.length; j++) {
        if (binaryArr[j] === "1") {
            ans.push(j);
        }
    }

    console.log(ans.join(" "));
}