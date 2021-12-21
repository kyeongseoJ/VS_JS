var numbers_a = new Array();  //배열의 크기를 지정하지 않음
console.log(numbers_a);

var numbers_b = new Array(4); //배열의 크기 지정
console.log(numbers_b);

var numbers_c = ['one', 'two','three', 'four']; //배열 만들기
console.log(numbers_c);

var numbers_d = Array('one', 'two','three', 'four'); //배열 만들기
console.log(numbers_d);

console.log(numbers_c === numbers_d);