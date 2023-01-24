const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

require('colors');

console.clear();

// console.log(argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 3;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado.'))
    .catch(err => console.log(err));

