// 조건문의 중첩 
// Switch 구문 연습 
var session = prompt("관심분야를 선택해주세요. 1-인공지능, 2-블록체인, -웹 개발", "1");

switch(session) { //switch 조건
    case "1" : //case 값 1 : 명령 1
        document.write(`<p>인공지능은 <br><strong>광주 인공지능 사관학교</strong></br>에서 진행됩니다.</p>`)
        break;
    case "2" : //case 값 2 : 명령 2
        document.write(`<p>블록체인은 <br><strong>K-Digital Training</strong></br>에서 진행됩니다.</p>`)
        break;        
    case "3" : //case 값 3 : 명령 3
        document.write(`<p>웹 개발은 <br><strong>호남 ICT 이노베이션</strong></br>에서 진행됩니다.</p>`)
        break;        
    case "null" :
        document.write("주의! 아무것도 실행되지 않습니다.")
    default: alert("잘못 입력하셨습니다. 숫자 1, 2, 3번 중에서 하나를 선택하여 주세요.")
}

