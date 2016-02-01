var Sabina    = require('./Sabina'),
    Proxy     = require('./lib/Proxy'),
    EasyProxy = require('./lib/EasyProxy'),
    cancion   = new Sabina(),
    disquera  = Proxy.createProxy(cancion),
    easy   = EasyProxy.createProxy(cancion);

console.log(cancion.hello(), cancion.goodbye());
console.log(disquera.hello(), disquera.goodbye());
console.log(easy.hello(), easy.goodbye());
