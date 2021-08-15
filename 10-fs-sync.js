const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt',
    `Acesta este rezultatul crearii fisierului: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('done with this');
console.log('starting the next one');
// console.log(first);
// console.log(second);
