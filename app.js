const EvenetEmitter = require('events');
const customEmitter = new EvenetEmitter();


customEmitter.on('response', (e) => {
    console.log(`data recieved `)
})


customEmitter.emit('response');
