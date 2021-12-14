// continue 사용한 반복문 

var i 
var n = 10;
var sum =0; //초기값

for (i = 1; i <= n; i++){
    if( i % 2 === 1 ) //홀수 일 경우
        continue      // 건너뛰기
    sum += i;         // 짝수끼리만 더하기 
}