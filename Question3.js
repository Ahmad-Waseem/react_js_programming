const q3 = (arr) => arr.reverse().map(elem => (elem % 2) === 0 ? (elem / 2) : elem * 3 + 1).filter(num => num <= 100).reduce((sum, num) => sum + num, 0);

let arr = [5, 12, 7, 9, 4, 6]
console.log(q3(arr));
