//조건문 연산자와 짧은 조건문 연습
true ? alert('1번 출력A') : alert('1번 출력B')  //출력A

false ? alert('2번 출력B') : alert('2번 출력A') //출력A

true || alert('3번 출력A') //출력 없음 좌변이 참이라 실행하지 않았다.

true && alert('4번 출력A')//출력A

document.write(`<h1 style="text-align:center;">조건부 연산자 = 삼항 연산자</h1>`)
document.write(`<p> 불 표현식 ? 참일 때 결과 : 거짓일 때 결과</p>`)

document.write(`<h1 style="text-align:center;">짧은 조건문 = 논리합/곱 연산자</h1>`)
document.write(`<p>논리합 연산자 || => 좌변이 참이면 우변은 실행하지 않는다. </p>`)
document.write(`<p>논리곱 연산자 && => 좌변이 거짓이면 우변은 실행하지 않는다. </p>`)