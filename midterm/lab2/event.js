let event = require('events')
let eventEmitter = new events.EventEmitter()

eventEmitter.on('foo' , () => console.log('foo') )

eventEmitter