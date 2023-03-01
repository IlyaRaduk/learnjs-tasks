function camelize(str) {
    return str.split('-').map((e, index) => {
        if (index == 0) { return e } else { return e[0].toUpperCase() + e.slice(1) }
    }).join('')
}


console.log(camelize("background-color")) //== 'backgroundColor';
console.log(camelize("list-style-image")) //== 'listStyleImage';
console.log(camelize("-webkit-transition")) // == 'WebkitTransition';