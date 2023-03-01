// function ucFirst(str){
//     str = str.split('');
//     str[0]=str[0].toUpperCase();
//     console.log(str.join(''))
// }

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

ucFirst("вася");