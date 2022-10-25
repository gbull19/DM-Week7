const binarySearch = (arr, value) => {
    let arr2 = [...arr];
    let middle = Math.floor(arr2.length/2);
    let guess = 0;
    while (arr2.length != 0) {
        if (arr2[middle] > value) {
            arr2 = arr2.slice(0, middle);
            console.log(arr2)
        } else if (arr2[middle] < value) {
            arr2 = arr2.slice(middle, arr2[arr2.length-1]);
            console.log(arr2)
        } else {
            guess = arr.indexOf(arr2[0]);
        }
    } return guess;
}
let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];
console.log(binarySearch(x, 68)); //true and return me the postition
// console.log(binarySearch(x, 51)); //false

errors = []

errors.push("There was an error")
console.log(String(errors))