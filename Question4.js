function zigzag(matrix) {
    let result = [];
    matrix.forEach((row, i) => result.push(...(i % 2 === 0 ? row : row.reverse())));
    return result;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(zigzag(matrix));
