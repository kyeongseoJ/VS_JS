// 배열 연습
const todos = ['자소서 쓰기', '지원할 기업 찾기', '취업센터 방문하기']

// push 이용해서 요소 추가하기
todos.push('빨래돌리기')
todos.push('저녁약속 잡기')

// 인덱스 이용해서 요소 추가하기
todos[5] = '한라봉 주문하기'
todos[3] = '담당자 문의하기'

// length 로 맨 뒤에 요소 추가하기 
todos[todos.length] = '신발 환불하기'

// 요소 제거하기 splice( 인덱스, 제거할 요소의 수 )
todos.splice(5, 1)

console.log(todos)

