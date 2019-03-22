import React, { Component } from 'react';
import firebase from 'firebase';
import {DB_CONFIG} from '../Initializers/firebase';

class SearchRegion extends Component {
  constructor(props){
    super(props);
    firebase.initializeApp(DB_CONFIG);
    
  }
  filterRegion(userSelect){
    console.log(userSelect.userSelect);

    let ref = firebase.database().ref();
    
    ref.orderByChild("Region").equalTo(userSelect.userSelect).on("value", 
    function(snapshot) {
     
      console.log(snapshot.val());
    });
  }
  render() {
    return (
      <div >
     <select id="selectRegion" onChange={event => this.filterRegion({userSelect:event.target.value})}>
                    <option value="0" defaultValue>Seleccione Región</option>
                    <option value="Región de Tarapacá">Región de Tarapacá</option>
                    <option value="Región de Antofagasta">Región de Antofagasta</option>
                    <option value="Región de Atacama">Región de Atacama</option>
                    <option value="Región de Coquimbo">Región de Coquimbo</option>
                    <option value="Región de Valparaíso">Región de Valparaíso</option>
                    <option value="Región de Ohiggins">Región de O'Higgins</option>
                    <option value="Región de Maule">Región del Maule</option>
                    <option value="Región de Ñuble">Región del Ñuble</option>
                    <option value="Región de Bíobío">Región del Bíobío</option>
                    <option value="Región de La Araucanía">Región De La Araucanía</option>
                    <option value="Región de Los Ríos">Región de Los Ríos</option>
                    <option value="Región de Los Lagos">Región de Los Lagos</option>
                    <option value="Región Metropolitana">Región Metropolitana</option>
                    </select>
      </div>
    );
  }
}
export default SearchRegion;