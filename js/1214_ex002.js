// 도전 : 코로나 19 거리두기가 적용된 좌석배치 짜보기 
// 먼저 일반 좌석배치 먼저 만들어 보자!

var i, ㅓ; // 중첩반복문에서 사용될 변수 

var memNum = prompt("총 입장객은 몇 명인가요?");    //전체 입장객 수 
var colNum = prompt("한 줄에 몇명씩 앉습니까?"); // 한 줄에 앉을 사람

if(memNum % colNum == 0){     //한번에 나눠 떨어지면 rowNum에 저장
    rowNum = parseInt(memNum / colNum);
}
else{                        // 나머지가 나온다면 + 1 해서 저장
    rowNum = parseInt(memNum / colNum) + 1;
}

document.write(`<p style=text-align:center;>전체 입장객 수는  ${memNum}명 입니다.</p>`)
document.write(`<p style=text-align:center;>한 줄당 앉을 사람은 ${colNum}명 입니다.</p>`)

// 외부 반복문에는 <tr>을 생성한다. 몇 줄 만들건지 좌석 수 고려 
// 표로 나타내주기 위해 <table> 테그를 추가 
// <table> - <tr> - <td> 
document.write("<table>"); 

for(i = 0; i < rowNum; i++) {   // <table> 테그 하단에 <tr> 테그를 좌석 줄 만큼 추가
  document.write("<tr>");
  // 다음은 각 줄마다 좌석을 추가하기 위한 중첩 반복문 구조
  // 한 줄에 몇 명씩 앉을 것인지를 colNum 이용
  for(j = 1; j <= colNum; j++) {
    seatNo = i * colNum + j;   // 각 줄마다의 해당 좌석번호를 연산하는 코드
    if(seatNo > memNum) break; // 만약 좌석의 값이 입장객 보다 많아지는 경우라면 break문을 동작
    document.write("<td> 좌석 " + seatNo + " </td>"); // 그리고 <td> 테그를 통해 좌석번호를 반복해서 입력 
  } 
  document.write("</tr>");     // 테이블 줄 바꿈을 위한 </tr> 테그
}
document.write("</table>");    

// 내부 반복문이 다 돌아가야 외부 반복문의 i값이 증가한다.