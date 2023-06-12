const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on ('start', () =>{
    console.log('meio')
})

console.log('inicio')

eventEmitter.emit('start')

console.log('Fim')