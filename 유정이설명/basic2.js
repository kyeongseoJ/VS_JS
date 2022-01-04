const obj ={
    a:1,
    b:2,
    add(){
        console.log(this.a+this.b)
    }
}

//함수 선언
//obj.add()

// map((인자)=>콜백함수)
const arrs = [1, 2, 3]

const arr2 = arrs.map((arr)=>{
    return arr + 2
})
// console.log(arr2)

// 관행적으로 안의 인자는 arr로 작성, 변수는 arrs로 작성

const heros = ["아이언맨", "스파이더맨", "토르"]
heros.forEach((hero)=>{
    console.log(hero)
})

// filter() 원하는 요소만 빼내기
const arr3 =[
    {
    name:"자바스크립트",
    id: 1,
    done:true
    },
    {
        name:"노드",
        id: 2,
        done:false
    },  
    {
        name:"파이썬",
        id: 3,
        done:false
    }
]
const arr4 =arr3.filter((arr)=>{
    return arr.done === false
})
console.log(arr4)

const arr5 =arr3.filter((arr)=>{
    return !arr.done === false
})
console.log(arr5)

//비동기 처리
//setTimeout(()=>{
//    console.log('1초 후')
//}, 1000) //ms 밀리세컨드

// console.log('1초 전')

// 하나씩 출력
const lang = ['한국어', '영어', '일본어', '중국어']
const arr6 =lang.map((langs)=>{
    return langs+" 1"
})
// console.log(arr6)

const arr7 =lang.map((langs)=>{
    return `${langs} 1`
})
// console.log(arr7)

const obj2 = {
    color : 'red',
    fruit : 'apple',
}
console.log(obj2)

const json = JSON.stringify(obj2)
console.log(`${json}`)

const filtObj = [
    {   id : 1,
        firstname : 'Zero',
        lastname: 'Cho'
    },
    {   id : 2,
        firstname : 'One',
        lastname: 'Jeon'
    },
    {   id : 3,
        firstname : 'Two',
        lastname: 'Kim'
    },
    {   id : 4,
        firstname : 'Three',
        lastname: 'Park'
    }
]

// 배열 안의 객체를 가져오는 용도의 반복문 다양한 활용
//filtObj.forEach((filt)=>{
//    console.log(filt)
//})
//
//for(let i=0; i< filtObj.length; i++){
//    console.log(filtObj[i])
//}
//
//for (let i of filtObj){
//    console.log(i)
//}

// 윤년 계산기
// 4의 배수고 100으로 나눠떨어지지 않는 수 
// 4의 배수고 400으로 나눠떨어지는 수 
const year = 2016
switch(year){
    case (year % 4 === 0 && year !== 0)||(year % 4 === 0 && year % 400 === 0) :
    console.log('윤년입니다.');
        break
    case !(year % 4 === 0 && year !== 0)||(year % 4 === 0 && year % 400 === 0):
    console.log('평년입니다.');
        break
}

// 다른 예시
const phone = '갤럭시'

switch(phone) {
    case '갤럭시':
        console.log(`${phone}입니다.`)
        break
    case '아이폰' :
        console.log(`${phone}입니다.`)
        break
    case '블랙베리' :
        console.log(`${phone}입니다.`)
        break
    default :
    console.log('아무것도 아닙니다.')
}

// falssi 한 값
// 0, null, '', null, nan
// trussi  한값
// 숫자, 문자, 띄어쓰기, 공백문자 전부해당 
// A && B
// A || B

