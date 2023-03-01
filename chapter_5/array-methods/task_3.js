function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num < a || num > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]