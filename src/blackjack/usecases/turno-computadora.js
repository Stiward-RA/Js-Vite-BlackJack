import { pedirCarta, crearCarta} from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 */
 
export const turnoComputadora = (imgCarta, divCartasJugadores, puntosJugadores, acumularPuntos, crearCarta, deck, determinarGanador) => {
    
    if (puntosJugadores[0] === 0) throw new Error('Puntos del jugador son necesarios');
    if (!deck || deck.length === 0) throw new Error('El deck es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        const turno = puntosJugadores.length - 1;
        crearCarta(carta, turno, divCartasJugadores);
        puntosComputadora = acumularPuntos(carta, turno);
        

    } while( (puntosComputadora < puntosJugadores[0]) &&  (puntosJugadores[0] <= 21));

    determinarGanador()
    
}