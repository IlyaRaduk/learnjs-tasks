function random(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min))
}
console.log(random(2,5))