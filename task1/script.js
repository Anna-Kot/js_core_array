// let arr1 = [2, 15,28, 10, -5, -7, 2];
// let arrCopy1 = arr1.slice();
// console.log(arrCopy1);

// let arr2 = [1, 2, 3, [10,20]];
// let arrCopy2 = arr2.slice();
// console.log(arrCopy2);



//Використовуючи функцію

let arr1=[1,2,3];
let arr2=[10,20];
let arrCopy=(arr1, arr2) => {
    arr1=arr1.slice('');
    arr1.splice(arr1.length + 1 , 0 , arr2);
    return arr1;
}
console.log(arrCopy(arr1, arr2));
console.log(arr1);
console.log(arr2);