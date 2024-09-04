function RestMyCase(arr, ...args) {
    const len = arr.length;
    const middle = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, middle);
    let secondHalf = arr.slice(middle);
    
    /*If the array has an odd length, the extra element
    should go to the first half. Otherwise to second half.EXAMPLE is WRONG*/
    if (len % 2==0){        //even
        secondHalf = [...secondHalf, ...args]
    }
    else{       // if odd then 1st-hlf
        firstHalf = [...firstHalf, ...args];
    }

    //reduce to sum and then product
    return (firstHalf.reduce((sum, num) => sum + num, 0) * secondHalf.reduce((sum, num) => sum + num, 0));
}


let arr = [1, 2, 3, 4, 5, 6];
console.log(RestMyCase(arr, 10, 20, 30));
