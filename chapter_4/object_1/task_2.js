let schedule = {};


function isEmpty(obj){
    let count = 0;
    for(let key in obj){
        count++
    }
    if(count===0) return true;
    return false;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
