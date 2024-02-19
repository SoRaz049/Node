const fs = require('fs');
const math = require('./maths')

//fs.writeFileSync('./test.txt','Hey there');


 const result = math.add(3,5);
 console.log(result);

fs.writeFileSync('./calc.txt',"The sum is " + String(result));

