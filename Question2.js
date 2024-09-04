function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop()); //pop and enqueue the element in array
    }
    return arr;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let k = 6;
console.log(rotateArray(arr, (k%arr.length)));
