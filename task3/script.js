//без використання функції

// let arr1 = ['Ivan', 'Pavlo', 'Ira'];
// let arr2 = ['oleksiy', 'Andriana'];
// for (let i=0; i < arr1.length; i++) {
//     arr1[i]=arr1[i].length;
// }
// console.log(arr1);
// for (let i=0; i < arr2.length; i++) {
//     arr2[i]=arr2[i].length;
// }
// console.log(arr2);



//за допомогою функції
let arr1 = ['Ivan', 'Pavlo', 'Ira'];
let getLength =(arr1, arr2) => {
    for (let i=0; i < arr1.length; i++) {
        arr1[i]=arr1[i].length;
    }
    return arr1;
}
console.log(getLength(arr1));
