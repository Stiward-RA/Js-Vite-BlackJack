/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {
        if (!carta) throw new Error('No hay carta para crear');


        const imgCarta = document.createElement('img');
        console.log(imgCarta);
        imgCarta.src = `/assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
        return imgCarta;
    }