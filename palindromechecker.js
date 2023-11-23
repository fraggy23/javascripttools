function palindrome(str) {

let strreplaced = str.replace(/\W|_/g, '').toLowerCase();
strreplaced.split(' ')

console.log(strreplaced.split("").reverse().join()==strreplaced.split("").join())
  return strreplaced.split("").reverse().join()==strreplaced.split("").join();
}

palindrome("_eye");
