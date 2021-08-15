const os = require('os');

// info about curr user
const user = os.userInfo();
console.log(user);
// return sys uptime in seconds
const uptime = os.uptime();

console.log(`Acest sistem ruleaza de 
            ${uptime} secunde (${parseInt(uptime / 60)} minute)`
);

const currentOS = {
    name: os.type(),
    relase: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};

console.log(currentOS);