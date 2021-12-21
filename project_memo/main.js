var input = prompt("인사장을 받으신 분의 성함을 입력해주세요.", "전경서")

var text1 ="2022년 새 해가 밝았습니다."
var text2 = "올해는 임인년 검은 호랑이 띠의 해라고 합니다."
var text3 = "튼튼한 호랑이의 기운을 받아"
var text4 = "님 건강하게 올 한해 보내시길 기원합니다."
var text5 = "새해 복 많이 받으세요.^^" 

// 출력될 폰트와 글자크기 통일 시키려면...?
// 태그로 싸는 방법과 폰트 지정 함수 사용하기 
document.writeln(`<pre>${text1}</pre>`)
document.writeln(`<pre>${text2}</pre>`)
document.writeln(`<pre>${text3}</pre>`)
document.writeln(`${input}${text4}`)
document.writeln(`<pre>${text5}</pre>`)

//시간이 3초 지날 때 마다 텍스트가 출력되게 하려면? 
// for()