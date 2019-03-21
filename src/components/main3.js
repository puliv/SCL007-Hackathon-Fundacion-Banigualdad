import React from 'react';
import imagen2 from '../IMG/jacket1.png'
import './main3.css'


function Main3 () {
    
        return (
            <div>
                <div className="details">
                    <p className="title">Denim Jacket</p>
                    <p className="value">$15000</p>
                </div>
                <div class="carousel carousel-slider center">
                    <div class="carousel-fixed-item center">
                        <a class="btn-floating btn-large waves-effect"><i class="material-icons">phone</i></a>
                    </div>
                    <div class="carousel-item red white-text" href="#one!">
                        <h2>First Panel</h2>
                        <p class="white-text">This is your first panel</p>
                    </div>
                    <div class="carousel-item amber white-text" href="#two!">
                        <h2>Second Panel</h2>
                        <p class="white-text">This is your second panel</p>
                    </div>
                    <div class="carousel-item green white-text" href="#three!">
                        <h2>Third Panel</h2>
                        <p class="white-text">This is your third panel</p>
                    </div>
                    <div class="carousel-item blue white-text" href="#four!">
                        <h2>Fourth Panel</h2>
                        <p class="white-text">This is your fourth panel</p>
                    </div>
                </div>
                <div>
                    <p>+569 123 45 678</p>
                    <p className="name">CLAUDIA DIAZ</p>
                </div>
            </div>    

            
        ) 
}

export default Main3;