import React, {Component} from 'react';

export default class welcome2Doby extends Component {
    render() {
        return (
            <div className='welcome2Doby'>
                <header>
                    <h1>
                        Bienvenido<br/>
                        <span>Los fantasmones tambien existimos!!!</span>
                    </h1>
                    <img src='/img/cabinas.jpg' alt='foto de cabinas'/>
                </header>
                <section>
                  <div className='sector sector1'>
                    <p>Doby es bueno, te permite jugar en competitivo "Cuando tu quieras" y no estas atado a las fechas fijas</p>
                    <img src='/img/lol.png'/>
                  </div>
                  <div className='sector sector3'>
                    <p>Doby ha desarrollado un sistema especial de busqueda salas de juegos - MOBA</p>
                    <img src='/img/cristal.jpg'/>
                  </div>
                    <div className='sector sector1'>
                      <p>Doby es un referi intermediario cuando se trata de apuestas entre amigos</p>
                      <img src='/img/vainGlory.jpg'/>
                    </div>
                </section>
            </div>
        );
    }
}
