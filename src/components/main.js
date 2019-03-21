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
                            <div className="tag-contain">
                                <button className="btn-small btn-categories">Belleza</button>
                            </div>
                            <p className="description">Agua Miscelar</p>
                            <p className="price">$5700</p>
                        </div>
                        <div className="card-action">
                            <a className="place" href="#">San Antonio</a>
                        </div>
                    </div>
                </div>
                </div>  

                <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="img-prod" src={imagen1} alt="cremas"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="tag-contain">
                                <button className="btn-small btn-categories">Accesorios</button>
                            </div>
                            <p className="description">Bolso Chic</p>
                            <p className="price">$10000</p>
                        </div>
                        <div className="card-action">
                            <a className="place" href="#">La Serena</a>
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
                            <div className="tag-contain">
                                <button className="btn-small btn-categories">Vestuario</button>
                            </div>
                            <p className="description">Denim Jacket</p>
                            <p className="price">$15000</p>
                        </div>
                        <div className="card-action">
                            <a className="place" href="#">Santiago</a>
                        </div>

                    </div>
                </div>
                </div>  

                
                </div>
            </div>
                        
        ) 
}

export default Main;