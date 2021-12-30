// 변수 
//var //옛날것, 호이스팅 무넺로 더 이상 안씀
//const // 상수
//let //변수

const a = 1
const b = 2

console.log(a,b)

let data = 3

console.log(data)

data = 4

console.log(data)

// undefined 값이 할당되지 않은 식별자

// 데이터 타입
// 숫자형 number
// 문자형 string

// 연산자
// * + - /
const c = 1

for(let i = 1; i<10; i++){
    console.log(i)
}
// i ++ : i가 1일 경우 1값을 먼저 보여주고 연산 진행 

// !== , != , ===, ==
// 조건문
// if(){}else if(){}else(){}
// switch()
const d = 'android'

switch(d){
    case 'android' :
        console.log('안드로이드')
        break
    case 'iphone':
        console.log('아이폰입니다')
        break
    default: //조건 두개다 해당 안될 때 실행된다.
        console.log('나머지')
}

// 객체 배열
// 객체는 = {}
const obj ={
    key: 'value',
    name: 'kasey',
    age: 27
}

console.log(obj.name)
console.log(obj.age)


console.log(obj.name, obj.age)

// 배열은 = []
const arr =["안녕하세요", 1234, {a:1, b:2}, [1,2,3,4]]
// index는 0부터 시작

console.log(arr[0])
console.log(arr[2])

for(i=0; i < arr.length; i++){
    console.log(arr[i])
}

//배열용
for(let a of arr){
    console.log(a)
}

//객체용
for(let b in arr){
    console.log(b)
}

//구조분해
const {name, age} = obj
console.log(name, age)

// 배열 구조분해
const arr1 = [1, 2, 3, 4, 5, 6]
// const{ eins, zwei, drei, vier, funf, sechs} = arr1
const{ eins, zwei, drei, ...rest} = arr1

console.log(rest)

//함수
function add() {
    //alert('hello')
}

add()

function add2() {
//    console.error('hello')
}
add2()

//화살표 함수 =>
const add3 =()=> {
    console.log('hello')
}
add3()

function add5(string) {
    console.log(string)
}
add5('문자열')

const obj1 ={
    a:1,
    b:2
}

function addto(a,b){
    console.log(a,b)
}

const adding = (number) =>{
    console.log(number)
}
adding('doggy')

// map 안에 파라미터(=매개변수)로 함수가 들어가게 되어있다.
arr.map(() => {

})

arr.map(function(){

})

const brr = [1,2,3,4,5,6,7]
// 맨뒤로 들어가고 맨 뒤에서 빼는 구조형식 사용
//brr.pop()
brr.push(8)
//앞에서 넣고(shift) 빼고(unshift)
// brr.shift()
// brr.unshift()

console.log(brr)

const crr = ['cat', 'dog', 'rabbit']
crr.forEach((pet)=>{
    console.log(pet)
})


