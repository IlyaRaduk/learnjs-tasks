// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
console.log(menu)

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'Number') {
            obj[key] = obj[key] * 2
        }
    }
}
