const colors = require('colors');
const functions = require('./proy_modules/functions.js');

const main = async () => {
    console.clear();

    const numero = 125;
    functions.interfazSigno(numero);

    const caracter1 = 'l';
    functions.interfazEncontroCaracter(caracter1);

    const caracter2 = 'PANELADA';
    functions.interfazEncontroproducto(caracter2);
};

main();
