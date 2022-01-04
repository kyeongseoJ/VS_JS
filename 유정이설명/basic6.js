// 클래스 안에는 무조건 생성자 함수를 사용한다.
class Webtoon {
    constructor(name, author) {
    this.name = name
    this.author = author
    }
}

// 부모객체보다 변수 수가 작아질 수는 없다. 무조건 같거나 커지거나 둘중 하나여야 한다. 
class Web2 extends Webtoon {
    constructor(name, author, date) {
        super(name, author)
        this.date = date
    }
    call() {
        console.log(`${this.name}의 작가는 ${this.author}입니다. 연재일은 ${this.date}요일 입니다.`)
    }
}

// 객체로 받아와 준다
const web = new Web2('독립일기', '자까', '일')

// 함수 호출
web.call()

