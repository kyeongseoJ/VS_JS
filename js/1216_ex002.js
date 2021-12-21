//concat() 메서드

var nums =[1, 2, 3]
var chars =['a', 'b','c']

var num_chars = nums.concat(chars);
var chars_nums = chars.concat(nums);

console.log(`nums.concat(chars)는 ${num_chars}입니다.`);
console.log(`chars.concat(nums)는 ${chars_nums}입니다.`);