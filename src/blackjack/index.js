import _ from 'underscore';
// import crearDeck, {miNombre} from './usecases/crear-deck.js';
// import {crearDeck as crearNuevoDeck} from './usecases/crear-deck.js';
// import { crearDeck } from './usecases/crear-deck.js';
// import { pedirCarta } from './usecases/pedir-carta.js';
// import { valorCarta } from './usecases/valor-carta.js';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta} from './usecases/';

const miModulo = (() => {
    'use strict'
    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K']

    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = []
    
    // Referencias de Htmml
    const imgCarta = document.createElement('img');
    const btnPedir = document.querySelector('#btnPedir'), 
          btnDetener = document.querySelector('#btnDetener'), 
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );

        divCartasJugadores.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
    }
    

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta ); 
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]
    }



    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadoras ] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadoras === puntosMinimos) {
                alert('Empate')
            }
            else if (puntosComputadoras > 21) {
                alert('Jugador 1 gano')
            } 
            else if (puntosComputadoras > puntosMinimos) {
                alert('La computadora ha ganado')
            }
        }, 100 );

    }


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(deck);
        const puntosJugadores =  acumularPuntos(carta, 0);
        crearCarta(carta, 0, divCartasJugadores);
        

        if (puntosJugadores > 21) {
            console.warn('Lo siento, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(imgCarta, divCartasJugadores, puntosJugadores, acumularPuntos, crearCarta, deck, determinarGanador)
        }
        else if (puntosJugadores === 21) {
            console.warn('21', 'genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(imgCarta, divCartasJugadores, puntosJugadores, acumularPuntos, crearCarta, deck, determinarGanador)
        }
    
    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(imgCarta, divCartasJugadores, puntosJugadores, acumularPuntos, crearCarta, deck, determinarGanador)

    });

    btnNuevo.addEventListener('click', () => {

        inicializarJuego()

    })

    return {
        nuevoJuego: inicializarJuego
    };

})();




