let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return [...arr].sort((a,b)=> a.length-b.length)
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)