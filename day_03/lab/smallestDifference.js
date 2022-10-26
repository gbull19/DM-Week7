const smallestDiff = (arr1, arr2) => {
    let value = Math.max(...arr1)
        if (Math.max(...arr2) > Math.max(...arr1)) {
            value = Math.max(...arr2)
        }
        arr1.forEach(num1 => {
            arr2.forEach(num2 => {
                if (Math.abs(num2-num1) < value) {
                    value = Math.abs(num2-num1)
                }
            })
        }); return value;
};
let a = [10, 20, 14, 16, 18];
let b = [30, 23, 54, 33, 96];
// console.log(smallestDiff(a,b))


const findSmallestDiff = (arr1, arr2) => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    let result = Number.MAX_SAFE_INTEGER;
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        if (Math.abs(arr1[arr1Pointer]-arr2[arr2Pointer]) < result) {
            result = Math.abs(arr1[arr1Pointer]-arr2[arr2Pointer])
        }
        if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            arr1Pointer++;
        } arr2Pointer++;
    } return result
}
console.log(findSmallestDiff(a,b))