function aclean(arr) {
    let obj = {}
    for (let i of arr) {
        let item = i.toLowerCase().split('').sort().join();
        if(!obj[item]){
            obj[item]=i
        }
    }
    return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"