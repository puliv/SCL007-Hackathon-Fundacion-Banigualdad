import React, { Component } from 'react';
import SearchRegion from './Component/SearchRegion.js';
import './SearchRegion.css';

class SearchRegion extends Component {
  render() {
    return (
      <div className="SearchRegion">
     <select  className="selectRegion" id="selectRegion">
                    <option value="0" defaultValue>Seleccione Región</option>
                    <option value="Región de Tarapacá">Región de Tarapacá</option>
                    <option value="Región de Antofagasta">Región de Antofagasta</option>
                    <option value="Región de Atacama">Región de Atacama</option>
                    <option value="Región de Coquimbo">Región de Coquimbo</option>
                    <option value="Región de Valparaíso">Región de Valparaíso</option>
                    <option value="Región del Libertador Gral. Bernardo O'Higgins">Región del Libertador Gral. Bernardo O'Higgins</option>
                    <option value="Región de Maule">Región del Maule</option>
                    <option value="Región de Ñuble">Región del Ñuble</option>
                    <option value="Región de Bíobío">Región del Bíobío</option>
                    <option value="Región de La Araucanía">Región de La Araucanía</option>
                    <option value="Región de Los Ríos">Región de Los Ríos</option>
                    <option value="Región de Los Lagos">Región de Los Lagos</option>
                    <option value="Región Metropolitana">Región Metropolitana</option>
                    </select>
      </div>
    );
  }
}

export default SearchRegion;