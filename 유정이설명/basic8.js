// 삼항 연산자
// 조건 ? 참일떄 실행할 구문 : 거짓일 떄 실행할 구문 
// 윤년 계산기 
// 4 % date === 0
// 100 % date !== 0 
// 400 % date === 0
const year = 2016
const result = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? '윤년입니다.': '평년입니다.'
console.log(result)