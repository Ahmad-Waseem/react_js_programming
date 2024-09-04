function flattenArray(arr) {
  const result = [];            // as the name suggests

  function flat(arr) {          
    for (let a of arr) {
      if (Array.isArray(a)) {
        flat(a);                //recursive calls
      } else {
        result.push(a);         //base case
      }
    }
  }

  flat(arr);
  return result;
}


const arr = [[0], [1, [2, [3]]], 4, [5, [6, [7]]]];
console.log(flattenArray(arr));