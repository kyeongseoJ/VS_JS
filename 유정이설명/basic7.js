// 삼항 연산자
// 조건 ? 참일떄 실행할 구문 : 거짓일 떄 실행할 구문 
const basket = 10

const result = basket >= 10 ? '10개 이상 입니다.' : '10개 미만 입니다.'

// console.log(result)

// 연습문제 
// 날짜가 목요일이고 웹툰에 독립일기가 있으면 true 없으면 false 반환

const webtoon = '독립일기'
const date = '목'

const result2 = webtoon === '독립일기' && date === '목' ? 'true' : 'false'
console.log(result2)

