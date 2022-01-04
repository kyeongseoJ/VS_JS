// concat ()
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

// console.log(arr1, arr2)

const arr3 = arr1.concat(arr2)
// console.log(arr3)

// prototype 프로토타입 -> 옛날버전, 클래스가 생기기전 사용하던 방법 
// 생성자 함수 대문자로 작성
function Webtoon(name, author) {
    this.name = name
    this.author = author
    this.call = function(){
        console.log(`${this.name}의 작가는 ${this.author}입니다.`)
    }
}

// 생성자 함수 호출 
const web = new Webtoon('김부장', '박태준')
const web2 = new Webtoon('독립일기', '자까')
web.call()
web2.call()

// 보라색 글씨 == 객체

// 보통 일반 함수는 소문자로 작성
// function animal(){

// }

// 프로토 타입 => 상속
// 부모+prototype+변수 = 함수 
Webtoon.prototype.call = function(){
    console.log(`${this.name}의 작가는 ${this.author}입니다.`)
}



