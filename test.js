const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

async function main() {
    const operation = await askQuestion("Enter the operation (add, subtract, multiply, divide): ");
    const num1 = parseFloat(await askQuestion("Enter the first number: "));
    const num2 = parseFloat(await askQuestion("Enter the second number: "));

    switch (operation) {
        case 'add':
            console.log(`Result: ${num1 + num2}`);
            break;
        case 'subtract':
            console.log(`Result: ${num1 - num2}`);
            break;
        case 'multiply':
            console.log(`Result: ${num1 * num2}`);
            break;
        case 'divide':
            if (num2 !== 0) {
                console.log(`Result: ${num1 / num2}`);
            } else {
                console.log("Cannot divide by zero");
            }
            break;
        default:
            console.log("Invalid operation");
    }

    readline.close();
}

main();