// 조건문의 중첩 
// 프롬프트 창 입력받는 알림창 prompt("", "")
var userNumber = prompt("3의 배수를 확인할 숫자를 입력하세요", "15");

// 첫번째 조건문 : 프롬프트 창에서 확인이나 취소를 눌렀는지 확인
if(userNumber !== null){
    //두번째 조건문 : 3의 배수인지 나머지값으로 확인
    if(userNumber % 3 === 0){
        alert("입력한 값은 3의 배수입니다.");
    }else{
        alert("3의 배수가 아닙니다.");
    }
// 첫번째 조건문의 else구문 
}else{
    alert("입력이 취소됐습니다.");
}