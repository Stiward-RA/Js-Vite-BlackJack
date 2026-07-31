import _ from 'underscore';

// export const miNombre = 'Stiward';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposEspeciales EJ: ['A', 'J', 'Q', 'K']
 * @param {Array<String>} tiposDeCarta  EJ: ['C', 'D', 'H', 'S']
 * @returns {Array<String>} retorna un nuevo deck de cartas
// Esta funcion crea una nueva baraja (deck)
*/
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales === 0) throw new Error('TposEspeciales es obligatorio como un arreglo de string');
 
    let deck = [];
    for(let i = 2; i <= 10; i++) {
        for(let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tiposDeCarta) {
        for(let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }

    return _.shuffle(deck);
}

// export default crearDeck;