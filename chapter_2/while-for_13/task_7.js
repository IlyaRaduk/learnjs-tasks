let number = 10;
let isPrimeNumber = true;
for (let i = 2; i < number; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrimeNumber = false;
            break;
        }
    }
    if (isPrimeNumber) {
        console.log(i)
    }
    isPrimeNumber = true
}