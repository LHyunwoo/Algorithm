// https://covenant.tistory.com/224

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 여러 줄로 입력값이 나열되어 있을 때
// const input = fs.readFileSync(filePath).toString().split("\n");

// 입력값이 하나일 때
// const input = fs.readFileSync(filePath).toString().trim();

// 두 줄 이상으로 나열
// let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

// 입력값 사이에 공백이 끼어있을 떼
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
// const [n,...arr] = input;