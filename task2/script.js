
//без використання функції
// let arr1 = [1, 2, 3];
// let arrToString = arr1.slice();
// for (let i=0; i<arrToString.length; i++) {
//     arrToString[i]=arrToString[i].toString();
// }
// console.log(arr1);
// console.log(arrToString);


// за допомогою функції
let arr = [1, 2, 3];
let arrToString =(arr) => {
    for (let i=0; i<arr.length; i++) {
        arr[i]=arr[i].toString();
    }
    return arr;
}
console.log(arr);
console.log(arrToString(arr));
