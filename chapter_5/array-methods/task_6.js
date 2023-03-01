function Calculator() {

    this['+'] = function (a, b) {
        return a + b;
    }
    this['-'] = function (a, b) {
        return a - b;
    }

    this.calculate = function (str) {
        let arg = str.split(' ');
        let a = arg[0];
        let b = arg[2];
        let operator = arg[1];
        if(this[operator]){
            return this[operator](+a,+b)
        }
        else{
            console.log('Такого метода нет')
        }
    }
    this.addMethod = function (name, func) {
        this[name]= func
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8