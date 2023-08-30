const { yellow, bgRed, bgBlue } = require("colors");

const functions = {};

const signo = (numero) => {
    if (numero >= 0) {
        return 'positivo';
    } else {
        return 'negativo';
    }
};

const encontrocaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return "se encuentra";
    } else {
        return "no se encuentra";
    }
};

const interfazSigno = (numero) => {
    console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`.bgYellow);
    console.log(`*              FUNCION SIGNO                                                *`.green);
    console.log(`((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))) `.yellow);
    console.log(`*              EL NUMERO ${numero} ES ` + signo(numero) + `                          *`);
    console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n`.bgYellow);
};

const interfazEncontroCaracter = (caracter) => {
    console.log(`*              FUNCION ENCONTRO CARACTER                                  *`.white.bgBlue);
    console.log(`++++++++++++++++*************************************+++++++++++++++++++++++++`.green);
    console.log(`*               EL CARACTER ${caracter.toUpperCase()} ` +
        encontrocaracter(caracter.toUpperCase()) + `         *`);
    console.log(`((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((\n`.bgCyan);
};

const encontroproducto = (PRODUCTO) => {
    const datos = ['cerveza', 'gaseosa', 'vino', 'vive 100', 'spedmax'];
    if (datos.includes(PRODUCTO.toLowerCase())) {
        return "DEBE DIRIGIRSE A LA BARRA".bgMagenta;
    } else {
        return "DEBE DIRIGIRSE A LA TIENDA".bgMagenta;
    }
};

const interfazEncontroproducto = (PRODUCTO) => {
    console.log(`######################################################################`.bgBlue);
    console.log(`######################################################################`.bgBlue);
    console.log(`*                     FUNCION ENCONTRO PRODUCTO                      *`.bgMagenta);
    console.log(`**********************************************************************`);
    console.log(`*            EL CLIENTE REQUIERE ${PRODUCTO.toUpperCase()}  `.bgMagenta +
        encontroproducto(PRODUCTO) + `   *`);
    console.log(`######################################################################\n`.bgYellow);
    console.log(`######################################################################`.bgBlue);
};

functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontrocaracter = encontrocaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.encontroproducto = encontroproducto;
functions.interfazEncontroproducto = interfazEncontroproducto;

module.exports = functions;
