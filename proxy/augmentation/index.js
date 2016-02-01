var Proxy = require('./Proxy'),
    Message = require('./Message');

var monkey = Proxy.createProxy(new Message());

console.log(monkey.hello());
console.log(monkey.goodbye());
