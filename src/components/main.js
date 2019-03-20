import React from 'react';
import './main.css'
import imagen from '../IMG/cremas.png'
import imagen1 from '../IMG/bolso.png'
import imagen2 from '../IMG/jacket1.png'



function Main (props) {
    
        return (
            <div className="container">
                <div className="row">
                <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="img-prod" src={imagen} alt="liloystich"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <ul>
                                <li>Agua Micelar</li>
                                <li>Precio $5700</li>
                                <li>R. Metropolitana</li>
                            </ul>
                        </div>
                        <div className="card-action">
                            <a href="#">Lawen_rayen</a>
                        </div>
                    </div>
                </div>
                </div>  

                <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="img-prod" src={imagen1} alt="liloystich"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <ul>
                                <li>Denim Jacket</li>
                                <li>Precio $15.000</li>
                                <li>Puerto Montt</li>
                            </ul>
                        </div>
                        <div className="card-action">
                            <a href="#">A_KACHIC</a>
                        </div>
                    </div>
                </div>
                </div>  


                <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="img-prod" src={imagen2} alt="liloystich"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <ul>
                                <li>Bolso Brocha Blanca</li>
                                <li>Precio $10.000</li>
                                <li>R. Metropolitana</li>
                            </ul>
                        </div>
                        <div className="card-action">
                            <a href="#">Carmenilustra</a>
                        </div>
                    </div>
                </div>
                </div>  

                
                </div>
            </div>

            
            
            
        ) 
}

export default Main;