// 클래스 안에는 무조건 생성자 함수를 사용한다.
class Webtoon {
    constructor(name, author) {
    this.name = name
    this.author = author
    }
}

class Web2 extends Webtoon {
    constructor(name, author) {
        super(name, author)
    }
    call(){
        console.log(`${this.name}의 작가는 ${this.author}입니다.`)
    }
}

// 객체로 받아와 준다
const web = new Web2('독립일기', '자까')

// 함수 호출
web.call()

