const log=require('./log')
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  log(msg)
});
myEmitter.emit('log','log events emmited');