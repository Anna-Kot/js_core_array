
let removeDuplicates = (arr) =>{
    return arr.filter((element,index,array)=> array.indexOf(element)==index)
}
console.log(removeDuplicates(['html', 'css', 'html', 'js']));
console.log(removeDuplicates(['html', 'css', 'js', 'python', 'js', 'scss']));
