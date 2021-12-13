// 입력받은 값 활용해서 화면에 띄우기

var x, y;
var iter = prompt("학습을 몇번 학습할지 입력해 주세요(최대10회)", "5");

document.write(`<h1 style="test-align:center;">XOR Gate</h1><br><hr>`)

for (var i = 0; i < iter; i++){
    x = [ Math.random() * 2 - 1,  Math.random() * 2 - 1 ]
    if ((x[0] > 0 && x[1] > 0) || (x[0] < 0 && x[1] < 0)){
    y = 0 } else { y = 1 }
  
    // 결과 출력
    document.write(`<h3>첫번째 x의 값 : ${x[0]}</h3>`)
    document.write(`<h3>두번째 x의 값 : ${x[1]}</h3>`)
    document.write(`<h3> y의 값 : ${y}</h3>`)
    document.write(`<hr id = result_line>`)
    }

