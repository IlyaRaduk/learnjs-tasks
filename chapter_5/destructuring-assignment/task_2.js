function topSalary(salaries) {
    let maxSalarie = 0;
    let maxName = '';
    if (Object.keys(salaries).length === 0) return null
    Object.entries(salaries).map(([key, value]) => { if (maxSalarie < value) { maxSalarie = value; maxName = key } })
    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 2500
};

console.log(topSalary(salaries))