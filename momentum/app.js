// js파일을 브라우저로 열 떄 원하는 결과를 보기 위해서는...?
// 중간 접착제 역할을 하는 html를 이용한다.
// alert("hi");
// 데이터타입 2가지 숫자형(number)과 문자열(string)
// console.log() 콘솔에 메세지를 보내는 것
//console.log("lalala")
//console.log(121212)
//console.log('abcabc')
// 콘솔에서 연산하기
// 1+2
// 2* 3
// 4/2
//console.log(2+3);
//console.log(2*5);
//console.log(5/2);
//변수를 사용해서 덜 번거롭게 코드 수정
// const : 상수, 변하지 않는 값 constant
//const b = 2;
//const a = 5;
//console.log(a+b);
//console.log(a*b);
//console.log(a/b);
//const veryLongVariableNameCamelCaseJavaScript = 0;
//const very_long_variable_name_snake_case_python = 0;
//const myName = "Seo";
//console.log("Hello " + myName)
// let : 새로운 것을 생성할 때 사용한다. 재할당이 가능
//let myName = "seo";
//myName = "Kyeongseo"; // 만들어진 변수가 있을때는 그냥 재할당만 해주면 된다. 예약어가 없음
//console.group("your name is " + myName);

const { flatten } = require("@tensorflow/tfjs-layers/dist/exports_layers");

// conditional 조건문 작성 하기
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     console.log("Pls write a number.");
// }else {
//     console.log("Thank you fot writing your age.")
// }
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Pls write a real positive number.");
// }else if(age < 18){
//     console.log("You are too young.")
// } else if(age >= 18 && age <= 50){
//     console.log("You can drink.")
// } else if(age > 50 && age <= 80){
//     console.log("You should exercise.")
// }
// else {
//     console.log("You can do whatever you want.")
// }

// true || true === true
// true || false === true
// false || true === true
// false || false === false

const hi = document.getElementById("hi")

hi.innerText = "Hey, Hi.";

console.log(hi.className);