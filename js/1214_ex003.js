// 찾아보고 연습해 볼 함수 

// 문서에 문자, 코드 등을 쓰는 메서드
document.write()

// write와 동일한 기능 + 줄바꿈 기호<pre></pre> 사용
document.writeln()

//문서의 제목을 가져오는 속성, 지정된 문서제목을 바꾸고 기존제목은 출력한다.
document.title = "함수 속성 메서드"

//문서의 URL을 가져와 출력해주는 속성
document.URL

// 문서의 문자 인코딩을 반환하는 속성
document.characterSet()

// id의 값으로 특정한 값을 가진 요소를 가져오는 속성
document.getElementById( )

//CSS 선택자로 요소를 선택, 주의할 점 : 선택자에 해당하는 첫번째 요소만 선택
document.querySelector()

// 특정 CSS 선택자를 가진 모든 요소 선택하는 속성
document.querySelectorAll()

// 선택한 요소(element)의 특정 속성(attribute)의 값을 가져오는 메서드
element.getAttribute()

// 특정 요소의 내용을 가져오거나, 특정 요소의 내용을 변경하는 메서드
element.innerHTML()

//반응형 웹디자인 시 사용, CSS는 미디어쿼리를 JS에 사용하는 메서드 
window.matchMedia()