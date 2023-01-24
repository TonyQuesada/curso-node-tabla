const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${(base)} x ${i} = ${(base * i)}\n`;
            consola += `${colors.red(base)} ${'x'.yellow} ${colors.red(i)} ${'='.yellow} ${colors.magenta(base * i)}\n`;
        }

        if (listar) {
            console.log('========================='.green);
            console.log('======'.green, colors.yellow('Tabla del', base), '======'.green);
            console.log('========================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)

        return (`'Tabla-${base}.txt'`);

    } catch (err) {

        throw (err);

    }

}

module.exports = {
    crearArchivo
}


