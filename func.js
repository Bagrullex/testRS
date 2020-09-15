const testFunction = (number1, number2) => {
    let result = 0;

    for (let i = number1; i <= number2; i += 1) {
        result += i;
    }

    return result;
};