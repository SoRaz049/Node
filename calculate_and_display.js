const fs = require('fs');
const math = require('./maths')

//fs.writeFileSync('./test.txt','Hey there');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Please enter the 1st value: ", value1 =>{
    readline.question("Please enter the 2nd value: ", value2 => {
        const result = math.add(parseInt(value1),parseInt(value2));
        console.log(result);
        fs.appendFileSync('./calc.txt', "The new sum for the data "+ value1 + " and " + value2 + " is: " + String(result)+ "\n");
        readline.close();
    });
});



//fs.writeFileSync('./calc.txt',"The sum is " + String(result));


