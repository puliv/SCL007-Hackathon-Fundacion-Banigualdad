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
                <div className="carousel carousel-slider center">
                    <div className="carousel-fixed-item center">
                        <a className="btn-floating btn-large waves-effect"><i className="material-icons">phone</i></a>
                    </div>
                    <div>
                        <img className="picture-prod" src={imagen2} alt=""/>
                    </div>
                    <div>
                        <a className="flecha1"><i className="material-icons left">arrow_back</i></a>
                        <a className="flecha2"><i className="material-icons right">arrow_forward</i></a>
                    </div>
                </div>

                <div>
                    <p>+569 123 45 678</p>
                    <p>R. METROPOLITANA</p>
                    <p className="name">CLAUDIA DIAZ</p>
                </div>
            </div>    

            
        ) 
}

export default Main3;