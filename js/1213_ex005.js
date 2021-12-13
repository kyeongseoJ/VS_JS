// 조건문 콘솔로그로 출력 확인
true || console.log('실행할까요?')

false || console.log('실행될까요?')

// split 활용하기
const names = '전경서, 조영은, 이인규, 김민서, 서진환, 최선영, 임이삭'.split(',')
console.log(`제 이름은 ${names[0]} 입니다`)

// 배열 연습 
name_Arr1 = ['전경서', '조영은', '이인규', '김민서', '서진환', '최선영', '임이삭']
// push 활용하기
name_Arr1.push('우찬우')
console.log(name_Arr1)

// sort 활용하기
const namesort = names.sort()
console.log(namesort)
